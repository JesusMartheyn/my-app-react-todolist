import React from "react";
import "../styles/TodoSearch.css"
import { TodoContext } from "./TodoContext";

function TodoSearch () {
    
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
        onChange={onSearchValueChange} 
        className="TodoSearch" 
        value= {searchValue}
        placeholder="cebolla"
        />
    );
}

export {TodoSearch};