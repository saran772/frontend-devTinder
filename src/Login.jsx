import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "./utils/userlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";

const Login = () => {
    const [emailId, setemailId] = useState("saran123@gmail.com");
    const [password, setpassword] = useState("Clgthhh@123");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                BASE_URL+"/login",
                { emailId, password },
                { withCredentials: true }
            );
            console.log("Login successful:", res.data);
            dispatch(adduser(res.data))
            return navigate("/")
        } catch (err) {
           
            alert("Login failed. Check console for details.");
        }
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div>
                        <fieldset className="fieldset">
                            <p className="text-accent">Email ID</p>
                            <input
                                value={emailId}
                                type="text"
                                className="input"
                                placeholder=""
                                onChange={(e) => setemailId(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-accent">Password</legend>
                        <input
                            value={password}
                            type="password"
                            className="input"
                            placeholder=""
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </fieldset>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary my-3 py-2" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
