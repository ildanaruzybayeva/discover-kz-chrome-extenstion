import React from "react";
import "./Search.css";
import icon from "./search.svg";

function Search() {
  return (
    <form
      className="searchform-container"
      type="submit"
      action="https://google.com/search"
      target="_blank"
    >
      <input
        className="search-input"
        placeholder="Google search"
        name="q"
        type="search"
      />
      <img className="search-icon" src={icon} alt="Search icon"></img>
    </form>
  );
}

export default Search;
