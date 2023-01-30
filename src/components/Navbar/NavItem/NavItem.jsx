import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ path }) => {
    return (
        <li>
            <Link to={`/${path == "home" ? "" : path}`}>
                {path.toUpperCase()}{" "}
            </Link>
        </li>
    );
};

export default NavItem;
