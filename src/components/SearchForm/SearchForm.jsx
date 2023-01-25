import React from "react";

const SearchForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="type">Type</label>
                <input name="type" type="text" />
                <label htmlFor="genre">Genre</label>
                <input name="genre" type="text" />
                <label htmlFor="year">Year</label>
                <input name="year" type="text" />
            </div>
            <div>
                <label htmlFor="default">Default</label>
                <input type="checkbox" name="default" />
                <label htmlFor="popular">Popular</label>
                <input type="checkbox" name="popular" />
                <label htmlFor="rating">Top Rating</label>
                <input type="checkbox" name="rating" />
            </div>
        </form>
    );
};

export default SearchForm;
