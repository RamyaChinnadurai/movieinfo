import React from "react";

const Search = () => {
  return (
    <div class="jumbotron">
      <form id="search-form">
        <input
          type="text"
          class="form-control"
          id="search-text"
          placeholder="Search For Movies "
        />
      </form>
    </div>
  );
};

export default Search;
