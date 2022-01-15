import React, { createContext, useState } from 'react';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [ auth, toggleAuth ] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    function login(e) {
        e.preventDefault();
        toggleAuth({
            ...auth,
            user: {
                email: "n.kapers@gmail.com",
                id: 5,
            },
            isAuth: true,
        });
        console.log('Gebruiker is ingelogd');
        // console.log(auth.user.email);
        history.push('/profile')
    }

    function logout(e) {
        e.preventDefault();
        toggleAuth({
            ...auth,
            // user: {
            //     email:
            //     id:
            // }
            isAuth: false,
        });
        console.log('Gebruiker is uitgelogd');
        history.push('/');
    }

    const data = {
        auth: auth,
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