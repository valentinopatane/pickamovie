import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ path, setMenuOpen, setSearchOpen }) => {
    return (
        <li>
            <Link
                to={`/${path == "home" ? "" : path}`}
                onClick={() => {
                    setMenuOpen(false), setSearchOpen(false);
                }}
            >
                {path.toUpperCase()}{" "}
            </Link>
        </li>
    );
};

export default NavItem;
