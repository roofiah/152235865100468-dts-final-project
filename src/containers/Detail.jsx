import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import apiUrl from '../apis/apiUrl';

const Detail = () => {
    let { id } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const fetchData = await apiUrl.get(`lookup.php?i=${id}`);
                setDetail(fetchData.data.meals);
            } catch (error) {
                console.log(error);
            }
        }

        fetchDetail();
    }, [id]);

    return (
        <div className="h-full">
            {detail && detail[0] ?
                <div className="flex flex-col w-full h-auto gap-y-8">
                    <div className="flex w-full h-[510px] sm:flex-row flex-col ">
                        <img
                            src={detail[0].strMealThumb}
                            alt=""
                            className="w-full h-auto aspect-video object-cover"
                        />
                        <div className="flex w-full h-full top-0 left-0 items-center px-4 md:px-24 bg-orange-600 opacity-70">
                            <div className="flex flex-col text-white">
                                <h1 className="text-6xl font-bold text-white">
                                    {detail[0].strMeal}
                                </h1>
                                <div className="mt-3">
                                    <h2>{detail[0].strTags.replace(/,/g, ' • ')}</h2>
                                    <h2>Category: {detail[0].strCategory}</h2>
                                    <h2>Area: {detail[0].strArea}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col">
                        <div className="ml-10 sm:w-1/4 w-full">
                            <h2 className="font-bold">Ingredients: </h2>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((number) => {
                                if (detail[0]["strIngredient" + number]) {
                                    return (
                                        <div className="flex flex-row">
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${detail[0]["strIngredient" + number]}.png`}
                                                alt=""
                                                className="w-7 h-auto"
                                            />
                                            <p className="ml-3">{detail[0]["strIngredient" + number]} </p>
                                            <p className="ml-3"> - {detail[0]["strMeasure" + number]}</p>
                                        </div>
                                    )
                                }
                                return null;
                            })}
                        </div>
                        <div className="w-3/4 h-auto px-11 sm:mt-0 mt-3">
                            <h2 className="mb-1 font-bold">Instructions :</h2>
                            <p>{detail[0]?.strInstructions?.replace(/tbsp./g, "tbsp").split(". ")?.map((item, index) => <p>{index + 1}. {item}.<br /></p>)}</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-center font-bold mb-4">Tutorial Video</div>
                        <div className="mb-10 flex justify-center">
                            <iframe
                                src={`https://www.youtube.com/embed/${detail[0].strYoutube.slice(-11)}`}
                                frameborder="0"
                                title={detail[0].strMeal}
                                width="400px"
                                height="300px"
                            />
                        </div>
                    </div>
                </div>
                :
                "Data not found"
            }
        </div>
    )
}

export default Detail