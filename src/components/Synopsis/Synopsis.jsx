import React from "react";

const Synopsis = ({ movie, isLoading }) => {
    return (
        <div className="synopsisMain">
            {isLoading === null || isLoading === true ? (
                ""
            ) : (
                <>
                    <h2>{movie?.title}</h2>
                    <div>
                        <div>
                            <h5>Year: {movie?.release_date.slice(0, -6)}</h5>
                            <h5>
                                Rating:{" "}
                                {movie?.vote_average.toFixed(1) == 0
                                    ? "Unavailable"
                                    : movie?.vote_average.toFixed(1)}
                            </h5>
                        </div>
                        <h5>
                            Genre: {movie?.genres.map((g) => g.name).join(", ")}
                        </h5>
                    </div>
                    <p>{movie?.overview}</p>
                </>
            )}
        </div>
    );
};

export default Synopsis;
