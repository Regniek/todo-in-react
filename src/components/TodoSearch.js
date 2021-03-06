import React from "react";
import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}){
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder='Cebolla' 
            onChange={onSearchValueChange}
            value = {searchValue}
            disabled={loading}
        />
    );
}

export { TodoSearch };