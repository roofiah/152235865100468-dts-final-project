import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            setErrorMessage('')
            setIsLoading(true)
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            navigate("/")
        } catch (error) {
            setIsLoading(false)
            setErrorMessage(error.message);
        }
    };
    return (
        <div className="w-full h-screen">
            <img
                className="sm:block absolute w-full h-screen object-cover"
                src="https://source.unsplash.com/random/1920x1080/?food,recipe,vegetable,rice"
                alt="/"
            />
            <div className="fixed w-full z-50 px-4 py-24 tr-color">
                <div className="flex sm:flex-row flex-col">
                    <div className="boxLeftLogin justify-center">
                        <img src={logo} alt="logo" className='imgLogin md:cursor-pointer sm:h-64 h-32' />
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
                                <p className="text-red-800">{errorMessage}</p>
                                <button className="bg-orange-700 hover:bg-orange-800 active:bg-red-700 py-3 my-3 font-bold">
                                    Register
                                    {isLoading ? <FontAwesomeIcon className='spinner ml-3' icon={faSpinner} /> : null}
                                </button>
                                <div className="mt-2 text-xs">
                                    Already have an account?{" "}
                                    <Link
                                        className="hover:text-red-600 active:text-red-600"
                                        to="/login"
                                    >
                                        Login
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
export default Register;