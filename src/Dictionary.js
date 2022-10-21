import React, { useState} from "react";

export default function Dictionary() {
    let [searchingWorld, setSearchingWorld] = useState("");
    function search(event) {
        event.preventDefault();
        alert(`${ searchingWorld}`);
    }
    function showWorld(event) {
        setSearchingWorld(event.target.value);
    }
    return (
        <div className="Dictionary">
            <h1 className="DictionaryTitle">Dictionary</h1>
            <form className="SearchForm" onSubmit={search}>
                <input type="search" placeholder="Search for any word or phrase" onChange={showWorld}></input>
                <button className="SearchButton">Search</button>
            </form>
        </div>
    );
}