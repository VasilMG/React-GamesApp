import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export default function AuthGuard (props) {

    const { isAuthenticated } = useContext(AuthContext)

    // const navigate = useNavigate()

    if (!isAuthenticated) {
        // navigate('login');

        return (<Navigate to="/login" />);
    }

    return (
        <>
            {props.children}
        </>
    );
}