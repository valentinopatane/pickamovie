import { useEffect, useState } from "react";
import { fetchMovies, fetchSeries } from "../api/movies/movies";

const useMultimedia = (pageNum = 1, mode, href) => {
    const [resultsAdult, setResultsAdult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        if (mode == "movies") {
            fetchMovies(pageNum)
                .then(({ data }) => {
                    if (pageNum == 1) {
                        setResultsAdult([]);
                        setCarousel(data.results.filter((e, i) => i < 5));
                        setResultsAdult(() => [...data.results.splice(5)]);
                    } else {
                        setResultsAdult((prev) => [...prev, ...data.results]);
                    }
                    setHasNextPage(Boolean(data.results.length));
                    setIsLoading(false);
                })
                .catch((e) => {
                    setIsLoading(false);
                });
        } else if (mode == "series") {
            fetchSeries(pageNum)
                .then(({ data }) => {
                    if (pageNum == 1) {
                        setResultsAdult([]);
                        setCarousel(data.results.filter((e, i) => i < 5));
                        setResultsAdult(() => [...data.results.splice(5)]);
                    } else {
                        setResultsAdult((prev) => [...prev, ...data.results]);
                    }
                    setHasNextPage(Boolean(data.results.length));
                    setIsLoading(false);
                })
                .catch((e) => {
                    setIsLoading(false);
                });
        }
    }, [pageNum, href]);

    const results = resultsAdult.filter((p) => p.original_language != "ko");
    return {
        results,
        isLoading,
        hasNextPage,
        carousel,
    };
};

export default useMultimedia;
