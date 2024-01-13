import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const withAuth =  (OldComponent) => {
    const NewComponent = (props) => {
        const auth = useContext(AuthContext)
        return <OldComponent {...props} {...auth} />
    }

    return NewComponent;
}
