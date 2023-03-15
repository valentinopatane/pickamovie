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
        setIsLoading(true);

        let response;
        if (formData.type == "movies") {
            const randomPageNumber = Math.floor(
                Math.random() * (!formData.genre && !formData.year ? 200 : 500)
            );

            try {
                response = await fetchMovies(randomPageNumber, formData);
            } catch (error) {
                console.log(error);
                setIsLoading(null);
                throw new Error("Couldn't get movie");
            }
        } else if (formData.type == "series") {
            const totalpages = await fetchSeries("", formData).then(
                (data) => data.data.total_pages
            );
            const randomPageNumber = Math.floor(
                Math.random() * (totalpages <= 500 ? totalpages : 500)
            );
            try {
                response = await fetchSeries(randomPageNumber, formData);
            } catch (error) {
                console.log(error);
                setIsLoading(null);
                throw new Error("Couldn't get series");
            }
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
        <>
            <main className="bodyHome">
                <section className="mainHome">
                    <SearchForm fetchData={fetchData} />
                    <Picker movie={movie} isLoading={isLoading} />
                    <Synopsis movie={movie} isLoading={isLoading} />
                </section>
            </main>
            <HomeFooter />
        </>
    );
};

export default Home;
