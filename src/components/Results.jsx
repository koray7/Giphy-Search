import { useState, useEffect } from "react";
import testData from "../data"
import Search from "./Search"

function Results({ results }) {
    console.log(testData)


    const [searchInput, setSearchInput] = useState("react")
    console.log(results)
    if (!results) {
        return (
            <p>Loading</p>
        )
    }
    return (

        <div box-sizing="border-box" className="resultsDiv">
            {results.map((giphy, idx) => {
                return (
                    <div className="showGiphy">
                        <p className="giphyName">{giphy.title}</p><br />
                        <button className="giphySite"><a className="giphySite" href="">{giphy.embed_url}</a></button><br />
                        <img className="giphyImg" src={giphy.images.fixed_height.url} /><br />
                    </div>
                )
            })}
        </div>


    )
}

export default Results