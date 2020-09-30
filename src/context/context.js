import React, { useState } from "react";

import { useCocktails } from "../hooks/useCocktails";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const [cocktails, loading, error] = useCocktails(search);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        cocktails,
        loading,
        error,
        handleSearchChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const DataConsumer = DataContext.Consumer;

export { DataContext, DataConsumer, DataProvider };
