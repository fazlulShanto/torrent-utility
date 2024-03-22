import React, { useState } from "react";

function Search({ searchButtonText, searchBarText, runSearch }) {

    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (ev)=>{
        // console.log(ev.target.value);
        setInputValue(ev.target.value);
    };
    const handleButtonClick = (ev) => {
        // console.log("i was clicked");
        if (typeof runSearch == "function") {
            runSearch(inputValue);
        }
    };
    return (
        <div className="h-10 flex pl-4 pr-4 mt-4">
            <input
                className="pl-2 w-full border-2 border-solid border-blue-300 rounded-md mr-2"
                type="text"
                name="search-text"
                id="search-text"
                placeholder={searchBarText}
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                onClick={handleButtonClick}
                type="button"
                className="rounded-md bg-indigo-400 w-24 font-bold"
            >
                {searchButtonText}
            </button>
        </div>
    );
}

export default Search;
