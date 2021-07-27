import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({ searchQuery, setSearchQuery }) {
    return (
        <form action="/Results" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                // value={searchQuery}
                // onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search podcasts"
                name="s"
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}


export default SearchForm;