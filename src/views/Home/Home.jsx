import React, { useState } from "react";
import {
    fetchMovies,
    fetchSeries,
    getMovie,
    getSerie,
} from "../../api/movies/movies";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Picker from "../../components/Picker/Picker";
import SearchForm from "../../components/SearchForm/SearchForm";
import Synopsis from "../../components/Synopsis/Synopsis";

const Home = () => {
    const [movie, setMovie] = useState(undefined);
    const [isLoading, setIsLoading] = useState(null);

    async function fetchData(formData) {
        console.log(formData);
        setIsLoading(true);
        let response;
        if (formData.type == "movies") {
            const randomPageNumber = Math.floor(Math.random() * 200);
            try {
                response = await fetchMovies(randomPageNumber, formData);
            } catch (error) {
                setIsLoading(null);
                throw new Error("Couldn't get movie");
            }
        } else if (formData.type == "series") {
            const randomPageNumber = Math.floor(Math.random() * 3);
            try {
                response = await fetchSeries(randomPageNumber, formData);
            } catch (error) {
                setIsLoading(null);
                throw new Error("Couldn't get series");
            }
            console.log(response);
        }
        const randomMovieNumber = Math.floor(Math.random() * 20);
        const movieFound = response.data.results[randomMovieNumber];
        if (movieFound == undefined) {
            setIsLoading(null);
        } else if (formData.type == "movies") {
            const { data } = await getMovie(movieFound.id);
            setMovie(data);
        } else if (formData.type == "series") {
            const { data } = await getSerie(movieFound.id);
            setMovie(data);
            console.log(data);
        }
        setTimeout(() => setIsLoading(false), 1000);
    }

    return (
        <main className="bodyHome">
            <section className="mainHome">
                <SearchForm fetchData={fetchData} />
                <Picker movie={movie} isLoading={isLoading} />
                <Synopsis movie={movie} isLoading={isLoading} />
            </section>
            <footer className="footerHome">
                <HomeFooter />
            </footer>
        </main>
    );
};

export default Home;
