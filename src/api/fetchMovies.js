import axios from 'axios';
const API_KEY = 'caf4817d038ad000058dc20ea7aa15f5';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = async () => {
    try {
        const {data: {results}} = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieById = async movieId => {
    try {
        const {data: {results}} = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieAdd = async (movieId, param) => {
    try {
        const {data: {results}} = await axios.get(`${BASE_URL}movie/${movieId}/${param}?api_key=${API_KEY}`);
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMoviesByQuery = async query => {
    try {
        const {data: {results}} = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
        return results;
    } catch (error) {
        console.log(error);
    }
};
