import React, { useState } from "react";
import { fetchMovie, getMovie } from "../../api/movies/movies";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Picker from "../../components/Picker/Picker";
import SearchForm from "../../components/SearchForm/SearchForm";
import Synopsis from "../../components/Synopsis/Synopsis";

const Home = () => {
    const [movie, setMovie] = useState(undefined);
    const [isLoading, setIsLoading] = useState(null);

    async function fetchData(formData) {
        setIsLoading(true);
        const randomPageNumber = Math.floor(Math.random() * 200);
        const response = await fetchMovie(randomPageNumber, formData);
        const randomMovieNumber = Math.floor(Math.random() * 20);
        const movieFound = response.data.results[randomMovieNumber];
        if (movieFound == undefined) {
            setIsLoading(null);
        }
        const { data } = await getMovie(movieFound.id);
        setMovie(data);
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
