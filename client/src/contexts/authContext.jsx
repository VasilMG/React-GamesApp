import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authServices from '../services/authService'
import Path from "../paths"
import usePersistedState from "../hooks/usePersistedState";




export const AuthContext = createContext();

AuthContext.displayName = "AuthContext"

export const AuthProvider = ({
        children,
    }) => {
        const navigate = useNavigate();
        const [auth, setAuth] = usePersistedState('auth', {})
    
        const loginSubmitHandler = async (values) => {
            console.log(values);
            const res = await authServices.login(values.email, values.password);
            
            setAuth(res);
            localStorage.setItem('accessToken', res.accessToken)
            navigate(Path.Home);
        }
    
        const registerSubmitHandler = async (values) => {
            console.log(values);
            const result = await authServices.register(values.email, values.password);
    
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
    
            navigate(Path.Home);
        }
    
        const logoutHandler = () => {
            setAuth({});
            console.log(auth)
            localStorage.removeItem('accessToken')
            console.log(localStorage.length)
        }
    
        const values = {
            loginSubmitHandler,
            username: auth.username,
            email: auth.email,
            userID: auth._id,
            isAuthenticated: !!auth.accessToken,
            registerSubmitHandler,
            logoutHandler,
        }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

