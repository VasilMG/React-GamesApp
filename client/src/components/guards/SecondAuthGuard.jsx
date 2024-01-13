import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function SecondAuthGuard () {

    const { isAuthenticated } = useContext(AuthContext)

    // const navigate = useNavigate()

    if (!isAuthenticated) {
        // navigate('login');

        return (<Navigate to="/login" />);
    }

    return <Outlet/>
}