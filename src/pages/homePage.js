import React from "react";

import Search from "../components/homePage/search";
import CocktailList from "../components/homePage/cocktailList";

export default () => {
  return (
    <main className="py-3">
      <Search />
      <CocktailList />
    </main>
  );
};
