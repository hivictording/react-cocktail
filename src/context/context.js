import React from "react";

import { useCocktail } from "../hooks/useCocktail";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [search, setSearch] = useCocktail();
  return (
    <DataContext.Provider value={{ search, setSearch }}>
      {children}
    </DataContext.Provider>
  );
};

const DataConsumer = DataContext.Consumer;

export { DataContext, DataConsumer, DataProvider };
