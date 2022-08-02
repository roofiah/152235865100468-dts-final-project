import React from 'react';
import { Rating } from '@mui/material';

const MenuCard = ({ menu }) => {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={menu.strMealThumb} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{menu.strMeal}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className='flex flex-row'>
                    <Rating sx={{
                        "& .MuiRating-iconFilled": {
                            color: "#F53E3F"
                        }
                    }} name="read-only" precision={0.1} value={5 / 2} max={5} readOnly />
                    <p>{5 / 2}</p>
                </div>
            </div>
        </div>
    )
}

export default MenuCard