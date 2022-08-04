import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiUrl from '../apis/apiUrl';
import MenuCard from '../components/MenuCard';

const Searched = () => {
    const { value } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const fetchedData = await apiUrl.get('search.php?s=' + value);
            setData(fetchedData.data.meals);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [value]);

    return (
        <>
            {isLoading ?
                <div className='mt-4 w-full h-full text-center'>
                    Please Wait...
                </div>
                :
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
                    ) : (
                        <div className='mt-4 w-full h-full text-center'>
                            <h2 className='font-bold'>Ooops...</h2>
                            No Data Result!
                        </div>
                    )}
                </div>
            }</>
    )
}

export default Searched