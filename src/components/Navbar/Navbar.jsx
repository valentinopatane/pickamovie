import React from "react";
import NavItem from "./NavItem/NavItem";
import { Link, useHref } from "react-router-dom";
import icon from "../../images/clapperboard.png";
const Navbar = () => {
    const url = useHref();
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
            <input className="searchBar" placeholder="Search"></input>
        </nav>
    );
};

export default Navbar;
