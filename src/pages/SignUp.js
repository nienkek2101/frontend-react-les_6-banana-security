import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [ userData, setData ] = useState({
        userName: '',
        email: '',
        password: '',
    })
    function handleSubmit(e) {
        e.preventDefault();

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
                    id="user-name"
                    name="user-name"
                    value={userData.userName}
                    onChange={(e) => setData(e.target.value)}
                />
            </label>
            <label htmlFor="email-adress">E-mailadres
                <input
                    type="text"
                    id="email-adress"
                    name="email-adress"
                    value={userData.email}
                    onChange={(e) => setData(e.target.value)}
                />
            </label>
            <label htmlFor="password">Wachtwoord
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={(e) => setData(e.target.value)}
                />
            </label>
            <button type="submit">
                Versturen
            </button>
        </p>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;