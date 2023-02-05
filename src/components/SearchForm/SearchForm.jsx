import React, { useEffect, useState } from "react";
import { fetchMoviesGenres, fetchSeriesGenres } from "../../api/movies/movies";

const SearchForm = ({ fetchData }) => {
    const [formData, setFormData] = useState({
        type: "movies",
        genre: "",
        year: "",
    });
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        async function getGenres() {
            const { data } =
                formData.type == "movies"
                    ? await fetchMoviesGenres()
                    : await fetchSeriesGenres();
            setGenres(data.genres);
        }
        getGenres();
    }, [formData.type]);

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
        <form id="searchForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="searchFormInputs">
                <label htmlFor="type">Type</label>
                <select name="type" onChange={handleChange}>
                    <option value="movies">Movies</option>
                    <option value="series">Series</option>
                </select>
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
                <span>
                    Series mode is in Beta state, sometimes you'll experience
                    failures from the database.
                </span>
            </div>
        </form>
    );
};

export default SearchForm;
