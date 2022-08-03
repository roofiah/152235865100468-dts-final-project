
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import apiUrl from '../apis/apiUrl';

const ListCategory = ({ id, title, url }) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const fetchedMenus = await apiUrl.get("filter.php?c=" + url);
                setMenus(fetchedMenus.data.meals);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMenus();
    }, []);
    console.log("ini isi banner" + JSON.stringify(menus))

    return (
        <div className='mx-10 mb-10'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">{title}</h5>
            <div className='relative flex items-center group'>
                <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {menus.map((item, index) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={index}>
                            <Link
                                to={`/detail/${item.idMeal}`}
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
                                    <p className='mt-3 white-space-normal text-xs flex whitespace-pre-wrap'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListCategory