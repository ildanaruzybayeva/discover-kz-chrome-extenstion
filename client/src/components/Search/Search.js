import React from "react";
import "./Search.css";
import icon from "./search.svg";

function Search() {
    return (
        <form>
            <a>
                <img src={icon} alt="Search icon"></img>
            </a>
            <input placeholder="Google search"/>
        </form>
    )
}

export default Search;