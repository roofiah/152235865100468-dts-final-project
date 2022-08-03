
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import apiUrl from '../apis/apiUrl';

const Banner = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const fetchedMenus = await apiUrl.get("filter.php?i=chicken_breast");
                setMenus(fetchedMenus.data.meals);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMenus();
    }, []);

    return (
        <div className='relative flex items-center group'>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {menus.map((item, index) => (
                    <div className='w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] inline-block cursor-pointer relative p-2' key={index}>
                        <Link
                            to={`/dessert`}
                        >
                            <img
                                className='w-full h-auto block'
                                src={item.strMealThumb}
                                alt={item?.strMeal}
                            />
                            <div className='absolute bottom-2 w-custom h-2/6 px-4 py-4 bg-black/75 opacity-0 opacity-100 text-white'>
                                <h1 className='white-space-normal font-bold flex'>
                                    {item ? item.strMeal : "-"}
                                </h1>
                                <p className='mt-3 white-space-normal text-xs flex whitespace-pre-wrap line-clamp-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Banner