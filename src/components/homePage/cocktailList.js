import React, { useContext } from "react";
import styled from "styled-components";

import Cocktail from "./cocktail";

import { DataContext } from "../../context/context";

const CocktailList = () => {
  const context = useContext(DataContext);
  const { cocktails, loading, error } = context;

  return (
    // <CocktailListContainer>
    <div className="container-fluid my-3">
      <div className="row justify-contenter-center align-items-center">
        {loading && (
          <div className="col-10 mx-auto">
            <h2 className="text-center">Loading Data.....</h2>
          </div>
        )}
        {!loading && error && (
          <div className="col-10 mx-auto">
            <h2 className="text-center">{error}</h2>
          </div>
        )}
        {!loading && cocktails ? (
          cocktails.map((cocktail) => (
            <Cocktail key={cocktail.id} {...cocktail} />
          ))
        ) : (
          <h2>No Cocktail Found</h2>
        )}
      </div>
    </div>

    // </CocktailListContainer>
  );
};

const CocktailListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2em;

  .cocktail {
    flex-basis: 80%;
    margin: 1em auto 1em;
  }
`;

export default CocktailList;
