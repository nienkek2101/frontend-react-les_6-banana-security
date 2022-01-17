import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function SignUp() {
    // dit eerste geprobeerd met userData.username
    // const [ userData, setData ] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // })

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, email, password);
        try {
            const result = await axios.post('http://localhost:3000/register', {
                username: username,
                email: email,
                password: password,
            })
            console.log(result);

        } catch(e) {
            console.error(e);
            console.log(e.response);
        }

    }
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="user-name">Gebruikersnaam
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label htmlFor="email-adress">E-mailadres
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
            <button
                type="submit">
                Registeren
            </button>
        </p>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;