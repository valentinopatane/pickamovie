import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import Navbar from "../components/Navbar/Navbar";
import Home from "../views/Home/Home";
import Movies from "../views/Movies";
import Series from "../views/Series";
const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/series" element={<Series />}></Route>
                <Route
                    path="/movies/:id"
                    element={<MovieDescription />}
                ></Route>
            </Routes>
        </>
    );
};

export default App;
