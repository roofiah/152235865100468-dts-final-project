
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import apiUrl from '../apis/apiUrl';

const Categories = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const fetchedMenus = await apiUrl.get("categories.php");
                setMenus(fetchedMenus.data.categories);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMenus();
    }, []);

    const slideLeft = () => {
        const slider = document.getElementById('sliderCat')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        const slider = document.getElementById('sliderCat');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className='mx-16'>
            <h1 className='mb-2 mt-4 text-2xl font-bold'>Category</h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id="sliderCat" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {menus.map((item, index) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={index}>
                            <Link
                                to={`/detail-category/${item.strCategory}`}
                            >
                                <img
                                    className='w-full h-auto block'
                                    src={item.strCategoryThumb}
                                    alt={item?.strCategory}
                                />
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-orange-800/70 opacity-0 hover:opacity-100 text-white'>
                                    <div className='text-category flex justify-center items-center w-24 h-24 bg-orange-800 '>
                                        <p className='white-space-normal text-xs font-bold text-center'>
                                            {item ? item.strCategory : "-"}
                                        </p>
                                    </div>
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
    )
}

export default Categories