import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import apiUrl from '../apis/apiUrl';
const Searched = () => {
    const { value } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([])

    const handleClick = (id) => {
        navigate('/detail/' + id)
    }

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
        <div className='p-4 md:ml-7 text-white'>
            <h1>Search for {value} </h1>
            {data.length > 0 ? (
                <div className='flex flex-wrap items-center justify-between'>
                    {data.map(item =>
                        <>
                            {item.poster_path !== null ? (
                                <img src={item.strMealThumb} className="w-[10%] mr-3 mt-3" alt="" onClick={() => handleClick(item.id)} />
                            ) : (
                                <img src="https://i.pinimg.com/564x/53/6c/63/536c6323d439596e766f055498e775e4.jpg" alt="" className='w-[10%] mr-3 mt-3' />
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div className='mt-4'>No Data Result!</div>
            )}
        </div>
    )
}

export default Searched