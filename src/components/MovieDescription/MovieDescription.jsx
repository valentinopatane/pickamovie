import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/movies/movies";
import errorImage from "../../images/imageError.png";
import HomeFooter from "../HomeFooter/HomeFooter";
const MovieDescription = () => {
    const href = useParams().id;
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getMovie(href).then(({ data }) => setMovie(data));
    }, []);

    return (
        <>
            <div className="movieDescriptionContainer">
                <div className="movieImageContainer">
                    <img
                        style={
                            isLoaded
                                ? { display: "block" }
                                : { display: "none" }
                        }
                        src={
                            movie &&
                            `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                        }
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = errorImage;
                        }}
                        onLoad={() => setIsLoaded(true)}
                    ></img>
                </div>
                <div className="movieDataContainer">
                    <h1>{movie?.title}</h1>
                    <p>{movie?.overview}</p>
                    <ul>
                        Genres:
                        {movie?.genres?.map((g) => (
                            <li key={g.id}>{g.name}</li>
                        ))}
                    </ul>
                    <div>
                        <span>
                            Rating:{" "}
                            {movie?.vote_average?.toFixed(1) || "Unavailable"}
                        </span>
                        <span>
                            Year: {movie?.release_date || "Unavailable"}
                        </span>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </>
    );
};

export default MovieDescription;
