import React, { useContext } from 'react';
import { Formik } from "formik";

import { login } from '../../util/session_api_util';
import UserContext from '../../context/user_context';

const LoginDropDown = (props) => {
    const { user, setUser } = useContext(UserContext);

    const initialValues = {
        name: "",
        description: "",
        photo: ''
    }

    const handleSubmit = (user) => {
        const formData = new FormData();
        
        formData.append('user[email]', user.email);
        formData.append('user[password]', user.password);

        login(user)
            .then(res => setUser(res));
    };

    return (
        <div className="nav-dropdown-right">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="login-form" >
                        <input 
                            onChange={handleChange("email")} 
                            placeholder="Email"
                            type="text"/>

                        <input 
                            onChange={handleChange("password")} 
                            placeholder="Password"
                            type="password"/>

                        <button 
                            className="button"
                            onClick={handleSubmit} 
                            title="Login" 
                            type='submit'>
                            Log In
                        </button>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default LoginDropDown;