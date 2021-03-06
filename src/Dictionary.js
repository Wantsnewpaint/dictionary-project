import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleWordResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
                //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleWordResponse);

    //documentation for picture API: https://www.pexels.com/
    let pexelsApiKey="563492ad6f9170000100000189be1363623543c68349587d7e7a288b";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {

return (
    <div className="Dictionary">
        <section>
            <h3>Type a word to search:</h3>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">
            Suggested words: airport, beach, island, covid, tourism
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
    </div>
    );
    } else {
        load();
        return "loading";
    }
}