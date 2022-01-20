import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Profile() {
    const { user } = useContext(AuthContext);
    const [ privateData, setPrivateData ] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getPrivateData(token);
        }
    }, [])

    async function getPrivateData(token) {
        try {
            const result = await axios.get('http://localhost:3000/660/private-content', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(result.data);
            setPrivateData(result.data);

        } catch(e) {
            console.error(e);
            console.log(e.response);
        }
    }

    return (
        <>
            {privateData &&
            <div>
                <h1>Profielpagina</h1>
                <section>
                    <h2>Gegevens</h2>
                    <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email} </p>
                </section>
                <section>
                    <h2>{privateData.title}</h2>
                    <p>{privateData.content}</p>
                </section>
                <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </div>
            }
        </>
    );
}

export default Profile;