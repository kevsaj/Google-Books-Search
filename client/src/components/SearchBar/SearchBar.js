import React from "react";

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <form onSubmit={props.searchBook}>
                <input id="searchBar" onChange={props.handleSearch} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;