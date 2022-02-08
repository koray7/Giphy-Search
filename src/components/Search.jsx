import { useState } from "react";
import Results from "./Results";

function SearchBar(props) {

    // const [text, setText] = useState("")
   
    // const [err, setErr] = useState(false)
  
    const [searchInput, setSearchInput] = useState("cat")
    const handleInput = (e) => {
        handleInput(e.target.value)
    }
    const handleChange = (e)=>{
        // console.log(e.target.value)
        setSearchInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log(searchInput)
        props.handleFetch()
    }
   
    
    // function handleChange(e) {
    // console.log(e.target.value)

    // }
    return (
        <form onSubmit={handleSubmit} action="/" method="get">
            <input 
            type="text" 
            name="query" 
            placeholder="Search for gifs" 
            onChange={handleChange}
            value={searchInput}
            />
            <input type="submit" value="Search"/>

        </form>
    )
   
}

        {/* <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>

        <div className="input">
            <input
                size="40"
                type="text"
                id="header-search"
                placeholder="Search For Gifs"
                name="query"
                onChange={handleChange}
                placeholder="Search Giphy"
                value={searchInput}
            />
        </div>


        <div className="button">
            <input type="submit" value="Search" />
        </div> */}
  
export default SearchBar;