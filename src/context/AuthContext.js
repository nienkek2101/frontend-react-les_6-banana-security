import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from "axios";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [ auth, toggleAuth ] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const history = useHistory();

    useEffect(() => {
        console.log('banaan');
        // const token = localStorage.getItem('token');
        // console.log(token);
        // const decodedToken = jwt_decode(token);
        // console.log('Decoded token:', decodedToken);
        // if (token !== null) {
        //     getUserData(decodedToken.sub, token);
        // } else {
        //     toggleAuth({
        //         ...auth,
        //         user: null,
        //         isAuth: false,
        //         status: 'done',
        //     });
        // }

    }, []);

    // Ik verwacht een jwtToken als ik aangeroepen wordt.
    function login(jwtToken) {
        console.log('De context heeft de token ontvangen', jwtToken)

        // token in de localStorage plaatsen
        localStorage.setItem('token', jwtToken);

        //kijken wat allemaal te vinden is in die token
        const decodedToken = jwt_decode(jwtToken);
        console.log('Decoded token:', decodedToken);

        // die informatie gebruiken om de gebruikersinformatie in de context te zetten!

        // als je nog niet voldoende informatie hebt nu, zul je HIER
        // nog een asynchrone functie moeten schrijven met een GET-request om meer gegevens op te halen

        getUserData(decodedToken.sub, jwtToken);

        console.log('Gebruiker is ingelogd');
        // console.log(auth.user.email);

    }

    async function getUserData(id, token) {
        // e.preventDefault();

        try {
            const result = await axios.get(`http://localhost:3000/600/users/${id}`, {
                // headers had ik eerst niet, pas bij uitleg Sam vrijdag zag ik het.
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            // Hiermee zetten we de informatie over gebruiker in de CONTEXT
            toggleAuth({
                ...auth,
                user: {
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.id,

                },
                status: 'done',
                isAuth: true,
            });
            // console.log(auth.user.id);
            console.log(result.data);
            history.push('/profile');

        } catch(e) {
            console.error(e);
            console.log(e.response);
        }
    }

    function logout(e) {
        e.preventDefault();
        localStorage.clear();
        toggleAuth({
            ...auth,
            user: null,
            isAuth: false,
            status: 'done',
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
            {auth.status === 'pending'
                ? <p>Loading...</p>
                : children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;