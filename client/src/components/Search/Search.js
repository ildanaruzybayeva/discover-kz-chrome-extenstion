import React from "react";
import "./Search.css";
import icon from "./search.svg";

function Search() {
  return (
    <form
      className="search-container"
      type="submit"
      action="http://google.com/search"
      target="_blank"
    >
      <img className="search-icon" src={icon} alt="Search icon"></img>
      <input
        className="search-input"
        placeholder="Google search"
        name="q"
        type="search"
      />
    </form>
  );
}

export default Search;
