import axios from "axios";

const API = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

const apiKey = "e0ca2bfa2bbf30f8eecdb462f6b8d6d6";

export const fetchMovie = (pageNumber, formData) =>
    API.get(
        `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&year=${formData.year}&with_genres=${formData.genre}`
    );

export const fetchGenres = () =>
    API.get(`genre/movie/list?api_key=${apiKey}&language=en-US`);

export const getMovie = (movieId) =>
    API.get(`movie/${movieId}?api_key=${apiKey}&language=en-US`);

export const getImage = (path) => {
    axios.get(`https://image.tmdb.org/t/p/original/${path}`);
};
