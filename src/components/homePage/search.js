import React, { useContext } from "react";

import { DataContext } from "../../context/context";

const Search = () => {
  const context = useContext(DataContext);
  const { setSearch } = context;
  return (
    <div>
      <input
        type="text"
        className="form-control w-75 mx-auto"
        placeholder="Search Cocktail"
        onChange={() => setSearch("m")}
      />
    </div>
  );
};

export default Search;
