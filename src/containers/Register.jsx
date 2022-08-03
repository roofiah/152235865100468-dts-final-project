import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from '../assets/images/logo.png';

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            navigate("/")
        } catch (error) {
            setErrorMessage(error.message);
        }
    };
    return (
        <div className="w-full h-screen">
            <img
                className="hidden sm:block absolute w-full h-screen object-cover"
                src="https://source.unsplash.com/random/1920x1080/?food,recipe,vegetable,rice"
                alt="/"
            />
            <div className="fixed flex flex-row w-full z-50 px-4 py-24">
                <div className="boxLeftLogin justify-center">
                    <img src={logo} alt="logo" className='md:ml-8 md:cursor-pointer h-64' />
                    <div className="boxTextLeft">
                        <h3>Bingung Mau masak Apa?</h3>
                        <h4>Disini kalian bisa dengan mudah mencari resep menu favorit keluarga ~_~</h4>
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
                                Register
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
    )
}
export default Register;