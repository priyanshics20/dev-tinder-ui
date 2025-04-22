import React, { useState } from "react";
import { LoginService } from "../services/Login.Service.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "@/utils/constants.js";
import toast from "react-hot-toast";

const Login = () => {
    const [formValues, setFormValues] = useState({
        emailId: "",
        password: "",
        firstName:"",
        lastName: "",
    })
    const [isLoginForm, setIsLoginForm] = useState(true);
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

    const handleSignup = async () => {
        try {
            const { firstName, lastName, emailId, password } = formValues;
            const res = await axios.post(BASE_URL + "/signup", { firstName, lastName, emailId, password }, { withCredentials: true })
            dispatch(addUser(res?.data?.data));
            toast.success(res?.data?.message);
            navigate("/profile");
        }
        catch (err) {
            toast.error(err?.response?.data)
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Signup"}</h2> 
                    <form>
                        {!isLoginForm &&
                            <>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">FirstName</legend>
                                    <input type="text"
                                        name="firstName"
                                        value={formValues.firstName}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="Type here" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">LastName</legend>
                                    <input type="text"
                                        name="lastName"
                                        value={formValues.lastName}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="Type here" />
                                </fieldset>
                            </>
                        }
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
                    <button className="btn btn-primary mt-2" onClick={isLoginForm ? handleLogin : handleSignup}>{isLoginForm ? "Login" : "Signup"}</button>
                    </div>
                    <div className="m-auto my-3">
                        <p className="cursor-pointer text-blue-600" onClick={()=> setIsLoginForm(!isLoginForm)}>{ isLoginForm ? "New User? Signup Here" : "Existing User? Login Here" }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
