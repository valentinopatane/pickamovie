import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ carousel }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const img = `https://image.tmdb.org/t/p/original${carousel[currentIndex]?.backdrop_path}`;

    useEffect(() => {
        setTimeout(() => {
            if (currentIndex == 4) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 10000);
    }, [currentIndex]);
    return (
        <div className="carouselContainer">
            {carousel.map((r, i) =>
                i == currentIndex ? (
                    <div className="slide" key={r.id}>
                        <img src={img} alt="portrait" />
                        <div className="slideInfo">
                            <h4>{r.title ? r.title : r.name}</h4>
                            <p>{r.overview}</p>
                            <button
                                className="buttonSeeMore"
                                onClick={() => navigate(`/movies/${r.id}`)}
                            >
                                See more
                            </button>
                        </div>
                    </div>
                ) : (
                    ""
                )
            )}
        </div>
    );
};

export default Carousel;
