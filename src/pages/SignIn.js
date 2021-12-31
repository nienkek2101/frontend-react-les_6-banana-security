import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function SignIn() {
    const { login } = useContext(AuthContext);

    // deze functie werkt niet, de preventDefault geeft volgens mij een foutmelding. Daarom heb ik gewoon direct de login op de onSubmit gezet.
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     login();
    // }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={login}>
        <p>*invoervelden*</p>
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;