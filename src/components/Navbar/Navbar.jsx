import React from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import icon from "../../images/clapperboard.png";
const Navbar = () => {
    return (
        <nav className="mainNav">
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
