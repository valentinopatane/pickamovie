import React from "react";

const SearchForm = () => {
    return (
        <form className="searchForm">
            <div className="searchFormInputs">
                <label htmlFor="type">Type</label>
                <input name="type" type="text" />
                <label htmlFor="genre">Genre</label>
                <input name="genre" type="text" />
                <label htmlFor="year">Year</label>
                <input name="year" type="text" />
            </div>
            <div className="searchFormCheckboxes">
                <input type="checkbox" name="default" />
                <label htmlFor="default">Default</label>
                <input type="checkbox" name="popular" />
                <label htmlFor="popular">Popular</label>
                <input type="checkbox" name="rating" />
                <label htmlFor="rating">Top Rating</label>
            </div>
        </form>
    );
};

export default SearchForm;
