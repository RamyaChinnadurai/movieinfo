import React, { useState } from 'react';

const Search = ({onSearch}) => {

    const [ searchText, setSearchText ] = useState('');

    return (
        <form id="search-form">
            <input 
                type="text" 
                className="form-control" 
                id="search-text" 
                value={searchText}
                placeholder="Search For Movies"
                onChange={(e)=>{
                    const searchKey = e.target.value;
                    setSearchText(searchKey);
                    onSearch(searchKey);
                }}
            />
        </form>
    )
}


export default Search;