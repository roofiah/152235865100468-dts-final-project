import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiUrl from '../apis/apiUrl';
import MenuCard from '../components/MenuCard';

const Searched = () => {
    const { value } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await apiUrl.get('search.php?s=' + value);
                setData(fetchedData.data.meals);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [value]);

    return (
        <div className='p-4 md:ml-7 text-black'>
            <h2 className='mb-2 mt-4 font-bold'>Search for {value} </h2>
            {data !== null && data.length > 0 ? (
                <div className='grid grid-cols-6 gap-5 mx-4'>
                    {
                        data.map(menu => (
                            <MenuCard key={menu.idMeal} menu={menu} />
                        ))
                    }
                </div>
                // <div className='flex flex-wrap items-center justify-between'>
                //     {data.map(item =>
                //         <>
                //             {item.strMealThumb !== null ? (
                //                 <img src={item.strMealThumb} className="w-[10%] mr-3 mt-3" alt="" onClick={() => handleClick(item.id)} />
                //             ) : (
                //                 <img src="https://i.pinimg.com/564x/53/6c/63/536c6323d439596e766f055498e775e4.jpg" alt="" className='w-[10%] mr-3 mt-3' />
                //             )}
                //         </>
                //     )}
                // </div>
            ) : (
                <div className='mt-4 w-full h-full text-center'>
                    <h2 className='font-bold'>Ooops...</h2>
                    No Data Result!
                </div>
            )}
        </div>
    )
}

export default Searched