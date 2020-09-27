import React, { useContext } from "react";

// import { useCocktail } from "../../hooks/useCocktail";
import Cocktail from "./cocktail";

import { DataContext } from "../../context/context";

const CocktailList = () => {
  const context = useContext(DataContext);
  const { cocktails } = context;

  return (
    <>
      {cocktails ? (
        cocktails.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} {...cocktail} />
        ))
      ) : (
        <h2>No Cocktail Found</h2>
      )}
    </>
  );
};

export default CocktailList;
