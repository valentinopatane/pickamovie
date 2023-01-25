import React from "react";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Picker from "../../components/Picker/Picker";
import SearchForm from "../../components/SearchForm/SearchForm";
import Synopsis from "../../components/Synopsis/Synopsis";

const Home = () => {
    return (
        <main className="bodyHome">
            <section className="mainHome">
                <SearchForm />
                <Picker />
                <Synopsis />
            </section>
            <footer className="footerHome">
                <HomeFooter />
            </footer>
        </main>
    );
};

export default Home;
