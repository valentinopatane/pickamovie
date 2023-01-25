import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../views/Home";
import Movies from "../views/Movies";
import Series from "../views/Series";
const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/movies" element={<Movies />}></Route>
                <Route exact path="/series" element={<Series />}></Route>
            </Routes>
        </>
    );
};

export default App;
