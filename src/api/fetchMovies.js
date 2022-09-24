import axios from 'axios';
const API_KEY = 'caf4817d038ad000058dc20ea7aa15f5';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
        const responseData = response.data.results;
        return responseData;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieById = async movieId => {
    try {
        const response = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
        const responseData = response.data;
        return responseData;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieAdd = async (movieId, param) => {
    try {
        const response = await axios.get(`${BASE_URL}movie/${movieId}/${param}?api_key=${API_KEY}`);
        const responseData = response.data;
        return responseData;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMoviesByQuery = async query => {
    try {
        const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
        const responseData = response.data.results;
        return responseData;
    } catch (error) {
        console.log(error);
    }
};
