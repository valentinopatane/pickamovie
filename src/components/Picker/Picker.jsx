import React from "react";
import errorImage from "../../images/imageError.png";
const Picker = ({ movie, isLoading }) => {
    return (
        <div className="pickerContainer">
            <div className="movieFinder">
                <img
                    src={
                        movie &&
                        `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
                    }
                    style={
                        isLoading === null || isLoading === true
                            ? { display: "none" }
                            : { display: "block" }
                    }
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = errorImage;
                    }}
                ></img>

                {isLoading === null ? "?" : isLoading === true ? "LOADING" : ""}
            </div>
        </div>
    );
};

export default Picker;
