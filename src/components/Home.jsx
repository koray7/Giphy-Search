import SearchContainer from "./SearchContainer";
import SearchBar from "./Search";
import Results from "./Results"

function Home() {
    return (
        <div>
            <div className="fullBody">
                <div id="firstText">
                    <div id="giphySearch">
                        <h2>Giphy Search</h2>
                        <p>Search</p>
                    </div>
                </div>
                        <div className="HeaderText">
                            <h1>Giphy Search</h1>
                            <p>The true source for all things giphy...</p>
                        </div>
                </div>
                    <SearchContainer />
                    <Results />
            </div>
       
    )
}

export default Home;