import React, { useContext } from "react";

// import { useCocktail } from "../../hooks/useCocktail";
import Cocktail from "./cocktail";

import { DataContext } from "../../context/context";

const CocktailList = () => {
  const context = useContext(DataContext);
  const { cocktails, loading, error } = context;
  console.log(cocktails[0]);

  return (
    <>
      {loading && <h2>Loading Data.....</h2>}
      {!loading && error && <h2>{error}</h2>}
      {!loading && cocktails ? (
        cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))
      ) : (
        <h2>No Cocktail Found</h2>
      )}
    </>
  );
};

export default CocktailList;
