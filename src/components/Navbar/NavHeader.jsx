import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import ImgUser from '../../assets/images/user.png';
import { auth } from '../../config/firebase';
import SearchBar from '../SearchBar';

const NavHeader = () => {
    const navigate = useNavigate()
    const [userLogin] = useAuthState(auth)
    const [buttonDropDown, setButtonDropdown] = useState(false);

    const setDropDown = () => {
        setButtonDropdown((prev) => !prev);
    };

    const onLogout = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        });
    }

    const onLogin = () => {
        navigate("/login")
    }

    return (
        <nav className='bg-header text-white'>
            <div className='flex items-center font-medium justify-arround'>
                <div className="z-50 w-full flex justify-between">
                    <div className='flex flex-row w-6/12'>
                        <img src={logo} alt="logo" className='md:ml-8 md:cursor-pointer logoNav' />
                        <SearchBar color="#FF9700" />
                    </div>
                    <div className='flex flex-row p-4 mr-5'>
                        {userLogin && <div className='text-center mt-1'>{userLogin.email}</div>}
                        <img class="w-10 h-10 rounded-full ml-3" src={ImgUser} alt="Rounded avatar" />
                        <button onClick={setDropDown} className="ml-3">
                            <svg
                                className={
                                    buttonDropDown
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
                    {buttonDropDown && (
                        <section className="absolute mt-20 right-0 text-black">
                            {userLogin ?
                                <div className="flex flex-col gap-y-2 w-[130px] h-auto bg-white rounded-sm p-4">

                                    <button onClick={onLogout} className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#F53E3F" class="bi bi-box-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" /> <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" /> </svg>
                                        <p className="text-black ml-2">Logout</p>
                                    </button>
                                </div>
                                :
                                <div className="flex flex-col gap-y-2 w-[130px] h-auto bg-white rounded-sm p-4">
                                    <button onClick={onLogin} className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#F53E3F" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" /> <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" /> </svg>
                                        <p className="text-black ml-2">Login</p>
                                    </button>
                                </div>
                            }
                        </section>
                    )}
                </div>
            </div>
        </nav >
    )
}

export default NavHeader