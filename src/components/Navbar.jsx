import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../assets/images/logo.png';
import ImgUser from '../assets/images/user.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const Navbar = () => {
    const [userLogin] = useAuthState(auth)
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
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar