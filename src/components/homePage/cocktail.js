import React from "react";

const Cocktail = ({ idDrink, strDrink }) => {
  return (
    <article>
      <h5>
        {idDrink}: {strDrink}
      </h5>
    </article>
  );
};

export default Cocktail;
