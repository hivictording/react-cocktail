import React from "react";

const Cocktail = ({ id, name, image }) => {
  return (
    <article>
      <h5>
        {id}: {name} : {image}
      </h5>
    </article>
  );
};

export default Cocktail;
