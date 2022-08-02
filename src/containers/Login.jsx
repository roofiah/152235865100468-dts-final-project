import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from '../assets/images/logo.png';

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // const email = data.get("email")
        // const password = data.get("password")

        // try {
        //     await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
        // } catch (error) {
        //     setErrorMessage(error.message)
        // }
    };
    return (
        <div className="w-full h-screen">
            <img
                className="hidden sm:block absolute w-full h-screen object-cover"
                src="https://source.unsplash.com/random/1920x1080/?food,recipe,vegetable,rice"
                alt="/"
            />

            <div className="fixed w-full z-50 px-4 py-24 tr-color">
                <div className="flex flex-row">
                    <div className="boxLeftLogin justify-center">
                        <img src={logo} alt="logo" className='imgLogin md:cursor-pointer h-64' />
                        <div className="boxTextLeft">
                            <h3>WELCOME to MENUKU</h3>
                            <h4>Got just the ingredients and instructions for any recipe. just enjoy cooking. Browse through over 1.000.000 tasty recipe ~_~</h4>
                        </div>
                    </div>
                    <div className="containerForm">
                        <div className="boxRightLogin">
                            <form
                                onSubmit={handleSubmit}
                                className="formLogin"
                            >
                                <input
                                    className="boxInput"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    name="email"
                                />
                                <input
                                    className="boxInput"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    name="password"
                                />
                                <button className="bg-orange-700 hover:bg-orange-800 active:bg-red-700 py-3 my-3 font-bold">
                                    Login
                                </button>
                                <div className="mt-2 text-xs">
                                    Don't have an account?{" "}
                                    <Link
                                        className="hover:text-red-600 active:text-red-600"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login;