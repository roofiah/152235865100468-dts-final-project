import axios from 'axios';

// const API_KEY = process.env.REACT_APP_TASTY_KEY;
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

const apiUrl = axios.create({
    baseURL: baseUrl,
    // params: {
    //     api_key: "1",
    // },
});

export default apiUrl;