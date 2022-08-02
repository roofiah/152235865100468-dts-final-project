import React from 'react'

const Footer = () => {
    return (
        <div className='w-full aligns-item justify-between text-gray-300 bg-black'>
            <ul className='text-xs p-5 flex flex-wrap w-full aligns-center md:justify-between'>
                <li>
                    <p>Audio and Subtitle</p>
                </li>
                <li>
                    <p>Audio Description</p>
                </li>
                <li>
                    <p>Help Center</p>
                </li>
                <li>
                    <p>Gift Cards</p>
                </li>
            </ul>
            <div className='pb-5 text-xs pl-10'>
                {new Date().getFullYear()} © DTS Final Project - Rofiatul Adawiyah.
            </div>
        </div>
    )
}

export default Footer