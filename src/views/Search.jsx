import React, { useEffect, useState } from "react";
import { searchMovie, searchSerie } from "../api/movies/movies";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import MovieItem from "../components/MoviesList/MovieItem/MovieItem";
import MoviesList from "../components/MoviesList/MoviesList";

const Search = () => {
    const [search, setSearch] = useState([]);
    const params = new URL(window.location.href).searchParams;
    const URLParam = new URLSearchParams(params);
    const searchString = URLParam.toString().slice(6);

    useEffect(() => {
        const searchedData = async () => {
            const movies = await searchMovie(searchString);
            const series = await searchSerie(searchString);

            setSearch([...movies.data.results, ...series.data.results]);
        };
        searchedData();
    }, []);
    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <h3
                    style={{
                        margin: "50px 0 0 150px",
                        fontFamily: '"Inria Sans", sans-serif',
                        color: "#2666cf",
                        textTransform: "uppercase",
                        fontSize: "35px",
                        width: "max-content",
                    }}
                >
                    You searched for: {searchString}
                </h3>

                <h4
                    style={{
                        marginTop: "25px",
                        width: "100%",
                        textAlign: "center",
                        color: "#808080",
                        fontFamily: "'Holtwood One SC', serif",
                        fontSize: "30px",
                    }}
                >
                    Movies
                </h4>

                <MoviesList>
                    {search.map((movie, i) => {
                        if (movie.title)
                            return <MovieItem key={movie.id} movie={movie} />;
                    })}
                </MoviesList>

                <h4
                    style={{
                        marginTop: "25px",
                        width: "100%",
                        textAlign: "center",
                        color: "#808080",
                        fontFamily: "'Holtwood One SC', serif",
                        fontSize: "30px",
                    }}
                >
                    Series
                </h4>
                <MoviesList>
                    {search.map((movie, i) => {
                        if (movie.name)
                            return <MovieItem key={movie.id} movie={movie} />;
                    })}
                </MoviesList>
            </div>
            <HomeFooter />
        </>
    );
};

export default Search;
