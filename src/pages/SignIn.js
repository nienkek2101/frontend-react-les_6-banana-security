import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const { login, isAuth } = useContext(AuthContext);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // deze functie werkt niet, de preventDefault geeft volgens mij een foutmelding. Daarom heb ik gewoon direct de login op de onSubmit gezet.
    async function handleSubmit(e) {
        e.preventDefault();

        // loading state op true zettten en dit aan de gebruiker laten zien.
        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            });
            console.log(result);
            login(result.data.accessToken);
            // console.log(result.data.data.accesToken);
        } catch(e) {
            console.error(e);
            console.log(e.response);
            // error in de error state zetten en dit aan de gebruiker laten zien.
        }
        // loading state weer op false zetten
        // console.log(email, password);
    }

    return (
        <>
            {isAuth === false ?
                <div>
                    <h1>Inloggen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga
                        id molestias qui quo unde?</p>

                    <form onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="email">E-mailadres
                                <input
                                    type="email"
                                    id="email-field"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label htmlFor="password">Wachtwoord
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </p>
                        <button type="submit">Inloggen</button>
                    </form>

                    <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                </div> : <p>U bent al ingelogd</p>}
        </>
    );
}

export default SignIn;