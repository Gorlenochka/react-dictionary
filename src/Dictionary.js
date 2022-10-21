import React, { useState} from "react";
import axios from "axios";

export default function Dictionary() {
    let [searchingWorld, setSearchingWorld] = useState("");

    function getTranslate(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchingWorld}`;

        axios.get(apiUrl).then(getTranslate);
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