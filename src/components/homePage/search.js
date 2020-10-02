import React, { useContext, useEffect, useRef } from "react";

import { DataContext } from "../../context/context";

const Search = () => {
  const context = useContext(DataContext);
  const { setSearch } = context;

  const searchInput = useRef("");

  const handleChange = (event) => {
    setSearch(searchInput.current.value);
  };

  useEffect(() => {
    searchInput.current.focus();
  });

  return (
    <div>
      <input
        type="text"
        name="search"
        className="form-control w-75 mx-auto"
        placeholder="Search Cocktail"
        onChange={handleChange}
        // value={search}
        ref={searchInput}
      />
    </div>
  );
};

export default Search;
