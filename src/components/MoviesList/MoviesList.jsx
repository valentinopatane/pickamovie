import React from "react";

const MoviesList = ({ children }) => {
    return (
        <section className="movieListBody">
            <div className="movieListContainer">{children}</div>;
        </section>
    );
};

export default MoviesList;
