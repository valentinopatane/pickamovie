import React, { useEffect, useState } from "react";
import { fetchGenres } from "../../api/movies/movies";
import dice from "../../images/dice-2-svgrepo-com.svg";
import dice2 from "../../images/dice-3-svgrepo-com.svg";

const SearchForm = ({ fetchData }) => {
    const [formData, setFormData] = useState({
        type: "movies",
        genre: "",
        year: "",
        filter: "",
    });
    const [isHover, setIsHover] = useState(false);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function getGenres() {
            const { data } = await fetchGenres();
            setGenres(data.genres);
        }
        getGenres();
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(formData);
    };
    return (
        <form className="searchForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="searchFormInputs">
                <label htmlFor="type">Type</label>
                <input name="type" type="text" placeholder="Movie" disabled />
                <label htmlFor="genre">Genre</label>
                <select onChange={handleChange} name="genre">
                    <option value=""></option>
                    {genres.map((g) => (
                        <option value={g.id} key={g.name}>
                            {g.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="year">Year</label>
                <input name="year" type="number" onChange={handleChange} />
            </div>
            <div className="searchFormCheckboxes">
                <input
                    type="checkbox"
                    name="filter"
                    value="default"
                    defaultChecked
                    disabled
                />
                <label htmlFor="default">Default</label>
                <input type="checkbox" name="filter" value="popular" disabled />
                <label htmlFor="popular">Popular</label>
                <input type="checkbox" name="filter" value="rating" disabled />
                <label htmlFor="rating">Top Rating</label>
            </div>
            <button
                type="submit"
                className="movieButton"
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
            >
                {!isHover ? <img src={dice} alt="" /> : <img src={dice2}></img>}
            </button>
        </form>
    );
};

export default SearchForm;
