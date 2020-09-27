import React, { useContext } from "react";

// import { useCocktail } from "../../hooks/useCocktail";
import Cocktail from "./cocktail";

import { DataContext } from "../../context/context";

const CocktailList = () => {
  // const [search, setSearch] = useCocktail();

  const context = useContext(DataContext);
  // const
  return (
    <article>
      <Cocktail />
    </article>
  );
};

export default CocktailList;
