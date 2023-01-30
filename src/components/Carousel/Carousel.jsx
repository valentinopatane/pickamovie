import React, { useEffect, useState } from "react";

const Carousel = ({ carousel }) => {
    console.log(carousel);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                            <h4>{r.title}</h4>
                            <p>{r.overview}</p>
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
