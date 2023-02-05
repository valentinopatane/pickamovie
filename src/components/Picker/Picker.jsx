import React, { useState } from "react";
import errorImage from "../../images/imageError.png";
import dice from "../../images/dice-2-svgrepo-com.svg";
import dice2 from "../../images/dice-3-svgrepo-com.svg";
import Spinner from "../Spinner/Spinner";
const Picker = ({ movie, isLoading }) => {
    const [isHover, setIsHover] = useState(false);

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

                {isLoading === null ? (
                    "?"
                ) : isLoading === true ? (
                    <Spinner />
                ) : (
                    ""
                )}
            </div>
            <button
                form="searchForm"
                type="submit"
                className="movieButton"
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
            >
                {!isHover ? <img src={dice} alt="" /> : <img src={dice2}></img>}
            </button>
        </div>
    );
};

export default Picker;
