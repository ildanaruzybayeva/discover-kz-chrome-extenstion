import React from "react";
import "./Search.css";
import icon from "./search.svg";

function Search() {
    return (
        <form className="search-container">
            <img className="search-icon" src={icon} alt="Search icon"></img>
            <input className="search-input" placeholder="Google search"/>
        </form>
    )
}

export default Search;