import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [ isAuth, toggleIsAuth ] = useState(false);


    return ();

}



export default AuthContextProvider