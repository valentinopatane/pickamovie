import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../../images/imageError.png";

const MovieItem = React.forwardRef(({ movie }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    const movieBody = (
        <>
            <div className={isLoaded ? "movieImage" : "movieImage loading"}>
                <img
                    style={
                        isLoaded ? { display: "block" } : { display: "none" }
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
            <div className="movieInfo">
                <h6>{movie.title}</h6>
                <span>{movie?.release_date.slice(0, -6)}</span>
            </div>
        </>
    );

    const content = ref ? (
        <div
            onClick={() => navigate(`/movies/${movie.id}`)}
            className="movieItemContainer"
            ref={ref}
        >
            {movieBody}
        </div>
    ) : (
        <div
            onClick={() => navigate(`/movies/${movie.id}`)}
            className="movieItemContainer"
        >
            {movieBody}
        </div>
    );

    return content;
});

export default MovieItem;
