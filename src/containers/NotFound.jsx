import React from "react";
import logo from '../assets/images/logo.png';

const NotFound = () => {
    return (
        <div className="flex-wrapper bg-orange-600">
            <div className="text-center mt-40">
                <img src={logo} alt="logo" className='imgLogin md:cursor-pointer h-28' />
                <h1 className='font-bold'>Oops!</h1>
                <h2>The page you requested could not be found. We're working on it :)</h2>
            </div>
        </div>
    )
}
export default NotFound;