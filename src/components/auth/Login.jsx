import React, { useState } from "react";
import { LoginService } from "../../services/Login.Service";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formValues, setFormValues] = useState({
        emailId: "",
        password:""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((preValues) => ({
            ...preValues,
            [name]:value
        }))
    }

    const handleLogin = async () => {
        const { emailId, password } = formValues;
        const res = await LoginService(emailId, password);
        dispatch(addUser(res.data));
        navigate('/')
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <form>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email Id</legend>
                            <input type="text"
                                name="emailId"
                                value={formValues.emailId}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="text"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                    </form>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
