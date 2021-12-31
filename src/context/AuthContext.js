import React, { createContext, useState } from 'react';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [ isAuth, toggleIsAuth ] = useState(false);
    const history = useHistory();

    function login(e) {
        e.preventDefault();
        toggleIsAuth(true);
        console.log('Gebruiker is ingelogd');
        history.push('/profile')
    }

    function logout(e) {
        e.preventDefault();
        toggleIsAuth(false);
        console.log('Gebruiker is uitgelogd');
        history.push('/');
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    }
    // const [ toggleLogin ] = useContext(AuthContext);

    return (
        <AuthContext.Provider
            value={data}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;