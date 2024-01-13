import { useNavigate } from 'react-router-dom';
import * as authServices from '../../services/authServices'
import Path from '../../paths';
import { AuthContext } from '../../contexts/authContext';

import { useContext, useEffect } from "react";

export default function Logout () {

    const navigate = useNavigate();
    
    const {logoutHandler} = useContext(AuthContext)

    useEffect(() => {
        authServices.logout().then(() => {
            logoutHandler();
            navigate(Path.Home);
            }).catch(() => {
                logoutHandler();
                navigate('/login')
            })
    }, [logoutHandler, navigate])

    return null;
}