
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import apiUrl from '../apis/apiUrl';

const ListCategory = ({ id, title, url }) => {
    const [menus, setMenus] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchMenus = async () => {
        setIsLoading(true)
        try {
            const fetchedMenus = await apiUrl.get("filter.php?c=" + url);
            setMenus(fetchedMenus.data.meals);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchMenus();
    }, []);

    const slideLeft = () => {
        const slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider' + id);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            {isLoading ?
                <div className='mt-4 w-full h-full text-center'>
                    Please Wait...
                </div>
                :
                <div className='mx-10 mb-10'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">{title}</h5>
                    <div className='relative flex items-center group'>
                        <MdChevronLeft
                            onClick={slideLeft}
                            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                            size={40}
                        />
                        <div id={"slider" + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
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
                        <MdChevronRight
                            onClick={slideRight}
                            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                            size={40}
                        />
                    </div>
                </div>
            }</>
    )
}

export default ListCategory