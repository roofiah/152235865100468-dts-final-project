import React from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuCard = ({ menu }) => {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/detail/${menu.idMeal}`}>
                <img className="rounded-t-lg" src={menu.strMealThumb} alt="" />
                <div className="sm:p-5 p-2">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white text-center">{menu.strMeal}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">Read More about {menu.strMeal} to find out how to cook this dish with a very easy recipe</p>
                    <div className='flex flex-row'>
                        <Rating sx={{
                            "& .MuiRating-iconFilled": {
                                color: "#F53E3F"
                            }
                        }} name="read-only" precision={0.1} value={5 / 2} max={5} readOnly />
                        <p>{5 / 2}</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default MenuCard