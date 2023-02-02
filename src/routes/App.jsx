import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import Navbar from "../components/Navbar/Navbar";
import Home from "../views/Home/Home";
import Movies from "../views/Movies";
import Search from "../views/Search";
const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" exact element={<Movies />}></Route>
                <Route path="/series" exact element={<Movies />}></Route>
                <Route
                    path="/movies/:id"
                    element={<MovieDescription />}
                ></Route>
                <Route path="/tv/:id" element={<MovieDescription />}></Route>
                <Route path="/search" element={<Search />} />
            </Routes>
        </>
    );
};

export default App;
