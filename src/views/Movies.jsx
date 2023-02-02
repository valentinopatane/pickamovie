import React, { useState, useRef, useCallback, useEffect } from "react";
import { useHref } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import MovieItem from "../components/MoviesList/MovieItem/MovieItem";
import MoviesList from "../components/MoviesList/MoviesList";
import useMultimedia from "../hooks/useMultimedia";

const Movies = () => {
    const [pageNum, setPageNum] = useState(1);
    const href = useHref();
    const mode = href.slice(1);

    const { isLoading, results, hasNextPage, carousel } = useMultimedia(
        pageNum,
        mode,
        href
    );

    useEffect(() => {
        window.scrollTo(0, 0), setPageNum(1);
    }, [href]);

    const intObserver = useRef();
    const lastPostRef = useCallback(
        (movie) => {
            if (isLoading) return;
            if (intObserver.current) intObserver.current.disconnect();
            intObserver.current = new IntersectionObserver((movies) => {
                if (movies[0].isIntersecting && hasNextPage) {
                    setPageNum((prev) => prev + 1);
                }
            });
            if (movie) intObserver.current.observe(movie);
        },
        [isLoading, hasNextPage]
    );

    return (
        <>
            <Carousel carousel={carousel} />
            <h1
                style={{
                    marginTop: "25px",
                    width: "100%",
                    textAlign: "center",
                    color: "#808080",
                    fontFamily: "'Holtwood One SC', serif",
                }}
            >
                {mode == "movies" ? "Movies" : "Series"}
            </h1>
            <MoviesList>
                {results.map((movie, i) => {
                    if (results.length === i + 1) {
                        return (
                            <MovieItem
                                ref={lastPostRef}
                                key={movie.id}
                                movie={movie}
                            />
                        );
                    }
                    return <MovieItem key={movie.id} movie={movie} />;
                })}
            </MoviesList>
        </>
    );
};

export default Movies;
