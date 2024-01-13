// import { useEffect } from "react";
import { useContext, useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import {AuthContext} from "../../contexts/authContext";

export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext);


    const LoginFormNames = {
        Email: 'email',
        Password: 'password'
    }


    const initialFormValues = useMemo(() => ({
        [LoginFormNames.Email]: '',
        [LoginFormNames.Password]: '',
    }), [LoginFormNames.Email, LoginFormNames.Password])

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, initialFormValues);


    return (
        <section id="login-page" className="auth">
        <form id="login" onSubmit={onSubmit}>

            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name={LoginFormNames.Email}
                placeholder="Sokka@gmail.com" 
                onChange={onChange}
                value={values[LoginFormNames.Email]}
                />

                <label htmlFor="login-pass">Password:</label>
                <input 
                type="password" 
                id="login-password" 
                name={LoginFormNames.Password} 
                onChange={onChange}
                value={values[LoginFormNames.Password]}
                />
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you dont have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    );
}