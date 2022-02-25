import { useState } from "react";
import Results from "./Results";

function SearchBar({ results, setResults, handleFetch }) {

    const apiKey = process.env.REACT_APP_API_KEY
    const url = "api.giphy.com/v1/gifs/search"


    const [searchInput, setSearchInput] = useState([])
    const handleInput = (e) => {
        handleInput(e.target.value)
    }
    const handleChange = (e) => {

        setSearchInput(e.target.value)
    }
    const handleSubmit = (e) => {
        handleFetch(searchInput)
        e.preventDefault()
        console.log(e.target)
        console.log(searchInput)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="/" method="get">
                <input
                    className="MainInput"
                    type="text"
                    name="query"
                    placeholder="Search for gifs"
                    onChange={handleChange}
                    value={searchInput}
                />
                <input className="searchBar" type="submit" value="Search" />

            </form>

        </div>
    )

}

export default SearchBar;