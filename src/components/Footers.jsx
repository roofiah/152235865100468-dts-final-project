import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container w-full aligns-item justify-between text-gray-300 bg-black'>
            <div className="inline-flex w-full mb-2 px-24 py-5 justify-between text-[#808080]">
                <div className="flex flex-col gap-y-1">
                    <p>Menuku Premium</p>
                    <p>Contact Us</p>
                </div>
                <div className="hidden md:block">
                    <div className="flex flex-col gap-y-1">
                        <p>Blog</p>
                        <p>Investor Relations</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex flex-col gap-y-1">
                        <p>Help center</p>
                        <p>Jobs</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex flex-col gap-y-1">
                        <p>About</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
            </div>
            <div className='pb-5 text-xm pl-10 text-center'>
                {new Date().getFullYear()} © DTS Final Project - Rofiatul Adawiyah (152235865100-468).
            </div>
        </div>
    )
}

export default Footer