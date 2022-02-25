import SearchBar from "./Search"
import Results from "./Results"
import { useState } from "react"

function SearchContainer({ results, setResults }) {


    const handleFetch = (query) => {

        const key = process.env.REACT_APP_API_KEY
        console.log(`API Key,`, key)
        const URL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}`
        const options = {
            headers: {
                "Accept": "application/json"
            }
        }
        fetch(URL, options)
            .then(response => response.json())
            .then(data => {

                const queryResults = data.data

                setResults(queryResults)
            })
    }


    return (
        <div>
            <SearchBar handleFetch={handleFetch} results={results} setResults={setResults} />

        </div>
    )
}


export default SearchContainer