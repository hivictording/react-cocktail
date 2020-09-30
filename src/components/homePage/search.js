import React, { useContext } from "react";

import { DataContext } from "../../context/context";

const Search = () => {
  const context = useContext(DataContext);
  const { search, handleSearchChange } = context;

  return (
    <div>
      <input
        type="text"
        name="search"
        className="form-control w-75 mx-auto"
        placeholder="Search Cocktail"
        onChange={handleSearchChange}
        value={search}
      />
    </div>
  );
};

export default Search;
