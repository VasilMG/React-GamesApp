import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const withAuth =  (OldComponent) => {
    const NewComponent = (props) => {
        const auth = useContext(AuthContext)
        return <OldComponent {...props} {...auth} />
    }

    return NewComponent;
}
// can be used to wrap a component and use it as another component
// must delete the --> export default in front of the component func
// and make a export default withAuth(component) on the bottom line of the component