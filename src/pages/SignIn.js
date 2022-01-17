import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const { login } = useContext(AuthContext);

    // deze functie werkt niet, de preventDefault geeft volgens mij een foutmelding. Daarom heb ik gewoon direct de login op de onSubmit gezet.
    async function handleSubmit(e) {
        e.preventDefault();

        // loading state op true zettten en dit aan de gebruiker laten zien.
        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: 'pietpietersen@gmail.com',
                password: '123456',
            });
            login(result.data.accesToken);
            console.log(result.data.data.accesToken);
        } catch(e) {
            console.error(e);
            console.log(e.response);
            // error in de error state zetten en dit aan de gebruiker laten zien.
        }
        // loading state weer op false zetten
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="user-name">E-mailadres
                <input
                    type="text"
                    id="user-name"
                    name="user-name"
                    // value={userData.userName}
                    // onChange={(e) => setData(e.target.value)}
                />
            </label>
            <label htmlFor="password">Wachtwoord
                <input
                    type="text"
                    id="password"
                    name="password"
                    // value={userData.password}
                    // onChange={(e) => setData(e.target.value)}
                />
            </label>
        </p>
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;