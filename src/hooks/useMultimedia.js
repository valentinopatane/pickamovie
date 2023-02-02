import { useEffect, useState } from "react";
import { fetchMovie } from "../api/movies/movies";

const useMultimedia = (pageNum = 1) => {
    const [resultsAdult, setResultsAdult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetchMovie(pageNum)
            .then(({ data }) => {
                if (pageNum == 1) {
                    setCarousel(data.results.filter((e, i) => i < 5));
                    setResultsAdult((prev) => [
                        ...prev,
                        ...data.results.splice(5),
                    ]);
                } else {
                    setResultsAdult((prev) => [...prev, ...data.results]);
                }
                setHasNextPage(Boolean(data.results.length));
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
            });
    }, [pageNum]);

    const results = resultsAdult.filter((p) => p.original_language != "ko");
    return {
        results,
        isLoading,
        hasNextPage,
        carousel,
    };
};

export default useMultimedia;
