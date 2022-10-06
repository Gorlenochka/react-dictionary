import React from "react";

export default function Dictionary() {
    return (
        <div className="Dictionary">
            <h1 className="DictionaryTitle">Dictionary</h1>
            <form className="SearchForm">
                <input type="search" placeholder="Search for any word or phrase"></input>
                <button className="SearchButton">Search</button>
            </form>
        </div>
    );
}