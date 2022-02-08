import { useState, useEffect } from "react";
import testData from "../data"
import Search from "./Search"

function Results(props) {
console.log(testData)

    const [results, setResults] = useState(props.results || [])
    const [searchInput, setSearchInput] = useState("react")
    // console.log(results)

    //Fetch Call to Giphy API

    

    
    // useEffect(()=>{
    //     handleFetch("")
    // }, [])
    
    const currentResults = results.map((giphy, idx) => {
    return (
    <div>
    <p>{giphy.id}</p>
    <img src={giphy.images.fixed_height.url} />
    </div>
    )  
    })
    
    return (

    <div box-sizing = "border-box"  className="resultsDiv">
        {currentResults}
    </div>  
    

)
}

export default Results