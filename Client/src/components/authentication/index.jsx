import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    let navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if (!email || !password) {
            toast.error("Please Fill all the Feilds");
            return;
        }
        // console.log(email, password);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
            );
            // console.log(JSON.stringify(data));
            //console.log("Login Successful");
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/kb");
            toast.success("Login Successful");
        } catch (error) {
            // console.log("Error Occured!")
            toast.error("Credentials are incorrect! Try again");
        }
    }

    return (
        <>
            <form action="" >
                <div className="w-full flex flex-col">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center">
                        <input type="checkbox" className="w-4 h-4 mr-2" />
                        <p className="text sm">Remember Me</p>
                    </div>
                    <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password</p>
                </div>
                <div className="w-full flex flex-col my-4">
                    <button type="submit" onClick={handleSubmit} className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                        Log In
                    </button>
                    <button type="" className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                        Register
                    </button>
                </div>
            </form >
            <ToastContainer />
        </>
    )
}

export default Login
