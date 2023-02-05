import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";
import { Link, useHref, useNavigate } from "react-router-dom";
import icon from "../../images/clapperboard.png";
import { searchMovie, searchSerie } from "../../api/movies/movies";
import errorImage from "../../images/imageError.png";
import burgerMenu from "../../images/icons8-menú-redondeado-50.png";
import searchIcon from "../../images/icons8-búsqueda-50.png";
const Navbar = () => {
    const [search, setSearch] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const url = useHref();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

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

        setSearchOpen(false);
        setMenuOpen(false);
        navigate(`/search?` + queryString);
    };

    const handleMenu = () => {
        setSearchOpen(false);
        setMenuOpen(!menuOpen);
    };
    const handleSearchMenu = () => {
        setMenuOpen(false);
        setSearchOpen(!searchOpen);
    };
    return (
        <nav
            className={
                url == "/" || Number(url.slice(8)) != 0
                    ? "mainNav"
                    : "mainNav filter"
            }
        >
            <div className="burgerMenu">
                <img
                    src={searchIcon}
                    alt="menuButton"
                    onClick={handleSearchMenu}
                />
            </div>
            <div>
                <Link to="/">
                    <img src={icon} alt="" />
                </Link>
            </div>

            <ul className={menuOpen ? "navUl activated" : "navUl"}>
                <NavItem
                    path="home"
                    setMenuOpen={setMenuOpen}
                    setSearchOpen={setSearchOpen}
                ></NavItem>
                <NavItem
                    path="movies"
                    setMenuOpen={setMenuOpen}
                    setSearchOpen={setSearchOpen}
                ></NavItem>
                <NavItem
                    path="series"
                    setMenuOpen={setMenuOpen}
                    setSearchOpen={setSearchOpen}
                ></NavItem>
            </ul>
            <input
                className={searchOpen ? "searchBar activated" : "searchBar"}
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
                                setMenuOpen(false);
                                setSearchOpen(false);
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
            <div className="burgerMenu" onClick={handleMenu}>
                <img src={burgerMenu} alt="menuButton" />
            </div>
        </nav>
    );
};

export default Navbar;
