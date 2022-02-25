import SearchContainer from "./SearchContainer";
import SearchBar from "./Search";
import Results from "./Results"
import { useState } from "react"
function Home() {
    const [results, setResults] = useState([])
    return (
        <div className="mainPage">
            <div className="fullBody">

                <div className="HeaderText">
                    <h1 className="giphySearch">Giphy Search</h1>
                    <p className="homeText">The true source for all things giphy</p>
                </div>
            </div>
            <SearchContainer results={results} setResults={setResults} />
            <Results results={results} setResults={setResults} />
        </div>

    )
}

export default Home;