import React, { createContext, useState } from 'react';
import { useHistory } from "react-router-dom";
// import jwt_decode from 'jwt-decode';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [ auth, toggleAuth ] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    // Ik verwacht een jwtToken als ik aangeroepen wordt.
    function login(jwtToken) {
        console.log('De context heeft de token ontvangen', jwtToken)

        // token in de localStorage plaatsen
        // localStorage.setItem('token', jwtToken);

        //kijken wat allemaal te vinden is in die token
        // const decodedToken = jwt_decode(jwtToken);
        // console.log('Decoded token:', decodedToken);

        // die informatie gebruiken om de gebruikersinformatie in de context te zetten!

        toggleAuth({
            ...auth,
            user: {
                email: "pietpietersen@gmail.com",
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
        isAuth: auth.isAuth,
        user: auth.user,
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