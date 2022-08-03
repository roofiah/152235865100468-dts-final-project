import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../assets/images/logo.png';
import ImgUser from '../assets/images/user.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { signOut } from "firebase/auth";
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const [userLogin] = useAuthState(auth)

    const [profileDropDown, setProfileDropdown] = useState(false);

    const setDropDown = () => {
        setProfileDropdown((prev) => !prev);
    };
    const onLogout = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <nav className='bg-header text-white'>
            <div className='flex items-center font-medium justify-arround'>
                <div className="z-50 w-full flex justify-between">
                    <div className='flex flex-row'>
                        <img src={logo} alt="logo" className='md:ml-8 md:cursor-pointer logoNav' />
                        <ul className="md:flex hidden uppercase items-center gap-8 text-sm ml-4 p-4">
                            <li>
                                <Link to="/" className='px-3 inline-block hover:text-gray-600'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/daily-menu" className='px-3 inline-block hover:text-gray-600'>
                                    Daily Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/dessert" className='px-3 inline-block hover:text-gray-600'>
                                    Dessert
                                </Link>
                            </li>
                            <li>
                                <Link to="/vegetarian" className='px-3 inline-block hover:text-gray-600'>
                                    Vegetarian
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-row p-4 mr-5'>
                        {userLogin && <div>{userLogin.email}</div>}

                        <Badge badgeContent={2} color="error">
                            <NotificationsIcon />
                        </Badge>
                        <img class="w-10 h-10 rounded-full ml-2" src={ImgUser} alt="Rounded avatar" />
                        <button onClick={setDropDown}>
                            <svg
                                className={
                                    profileDropDown
                                        ? "rotate-180 transition-all duration-100 cursor-pointer"
                                        : "transition-all duration-100 cursor-pointer"
                                }
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.92907 7.07973L13.968 0.645906C13.9838 0.633879 13.9946 0.616512 13.9985 0.59707C14.0023 0.577628 13.9989 0.557451 13.9889 0.540332C13.9789 0.523213 13.963 0.510332 13.9442 0.50411C13.9254 0.497888 13.905 0.498754 13.8867 0.506546H0.113253C0.0950305 0.498754 0.0745892 0.497888 0.0557726 0.50411C0.0369559 0.510332 0.0210601 0.523213 0.011074 0.540332C0.001088 0.557451 -0.0023004 0.577628 0.00154573 0.59707C0.00539187 0.616512 0.0162077 0.633879 0.0319596 0.645906L6.07093 7.07973C6.19034 7.20627 6.33434 7.30707 6.4941 7.37597C6.65386 7.44487 6.82602 7.48041 7 7.48041C7.17398 7.48041 7.34614 7.44487 7.5059 7.37597C7.66566 7.30707 7.80966 7.20627 7.92907 7.07973Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>

                    {profileDropDown && (
                        <section className="absolute mt-20 right-0 text-black">

                            <div className="flex flex-col gap-y-2 w-[130px] h-auto bg-white rounded-sm p-4">
                                <button onClick={onLogout} className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-1 md:mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <p className="text-black">Logout</p>
                                </button>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar