import axios from "axios";

const API = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

const apiKey = "e0ca2bfa2bbf30f8eecdb462f6b8d6d6";

("https://api.themoviedb.org/3/discover/tv?api_key=e0ca2bfa2bbf30f8eecdb462f6b8d6d6&language=en-US&sort_by=popularity.desc&first_air_date.lte=undefined&page=1&with_genres=undefined");

export const fetchMovies = (pageNumber, formData) =>
    API.get(
        `discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=${
            pageNumber || ""
        }&year=${formData?.year || ""}&with_genres=${formData?.genre || ""}`
    );

export const fetchMoviesGenres = () =>
    API.get(`genre/movie/list?api_key=${apiKey}&language=en-US`);

export const getMovie = (movieId) =>
    API.get(`movie/${movieId}?api_key=${apiKey}&language=en-US`);

export const fetchSeries = (pageNumber, formData) =>
    API.get(
        `discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&first_air_date.lte=${
            formData?.year || ""
        }&page=${pageNumber || ""}&with_genres=${formData?.genre || ""}`
    );
export const getSerie = (serieId) =>
    API.get(`tv/${serieId}?api_key=${apiKey}&language=en-US`);

export const fetchSeriesGenres = () =>
    API.get(`genre/tv/list?api_key=${apiKey}&language=en-US`);
