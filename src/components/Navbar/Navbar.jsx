import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";
import { Link, useHref, useNavigate } from "react-router-dom";
import icon from "../../images/clapperboard.png";
import { searchMovie, searchSerie } from "../../api/movies/movies";
import errorImage from "../../images/imageError.png";

const Navbar = () => {
    const [search, setSearch] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const url = useHref();
    const navigate = useNavigate();

    const handleChange = async (e) => {
        setSearchValue(e.target.value);
        if (e.target.value == "") return;
        const movies = await searchMovie(e.target.value);
        const series = await searchSerie(e.target.value);
        setSearch([
            ...movies.data.results.splice(-3),
            ...series.data.results.splice(-2),
        ]);
    };

    const handleResults = () => {
        const query = {
            value: searchValue,
        };
        const searchParams = new URLSearchParams(query);
        const queryString = searchParams.toString();
        setSearchValue("");

        navigate(`/search?` + queryString);
    };
    return (
        <nav
            className={
                url == "/" || Number(url.slice(8)) != 0
                    ? "mainNav"
                    : "mainNav filter"
            }
        >
            <div>
                <Link to="/">
                    <img src={icon} alt="" />
                </Link>
            </div>

            <ul>
                <NavItem path="home"></NavItem>
                <NavItem path="movies"></NavItem>
                <NavItem path="series"></NavItem>
            </ul>
            <input
                className="searchBar"
                placeholder="Search"
                onChange={handleChange}
            ></input>
            {search && searchValue != "" && (
                <ul className="searchList">
                    {search.map((s) => (
                        <li
                            key={s.id}
                            className="searchListItem"
                            onClick={() => {
                                if (s.title) {
                                    navigate(`/movies/${s.id}`);
                                } else {
                                    navigate(`/tv/${s.id}`);
                                }
                                setSearchValue("");
                            }}
                        >
                            <img
                                src={
                                    s &&
                                    `https://image.tmdb.org/t/p/original/${s?.poster_path}`
                                }
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = errorImage;
                                }}
                            ></img>
                            <span className="searchListItemTitle">
                                {s.title ? s.title : s.name}
                            </span>
                        </li>
                    ))}
                    <button
                        className="searchListButton"
                        onClick={handleResults}
                    >
                        View all results
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
