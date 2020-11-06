import React, { useState} from "react";

const Search = ({onSearch}) => {
  const [ searchText, setSearchText] = useState('')
  return (
    <div class="jumbotron">
        <form id="search-form">
            <input
                type="text"
                className="form-control"
                id="search-text"
                placeholder="Search For Movies "
                value={searchText}
                onChange={
                  (e) =>{
                    const searchKey = e.target.value;
                    setSearchText(searchKey);
                    onSearch(searchKey);
                  }
                }
            />
        </form>
    </div>
  );
};

export default Search;
