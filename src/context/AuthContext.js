import React, {createContext, useContext, useEffect, useState} from 'react';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [ isAuth, toggleIsAuth ] = useState(false);

    function login() {
        toggleIsAuth(true);
    }

    const data = {
        isAuth: isAuth,
        login: login,
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