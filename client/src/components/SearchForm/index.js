import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search Here</label>
        <input
            value={props.search}
            onChange={props.handleInputChange}
            name="result"
            list="results"
            type="text"
            className="form-control"
            placeholder="Search by name or genre"
            id="result"
        />
        <datalist id="results">
          {props.podcasts.map(podcast => (
            <option id={podcast._id} title={podcast.title_original} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;