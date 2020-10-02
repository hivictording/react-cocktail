import React from "react";
import { Link, useParams } from "react-router-dom";

import { useCocktails } from "../hooks/useCocktails";

const SingleCocktail = () => {
  const { name } = useParams("name");

  const [cocktail, loading, error] = useCocktails(name.toLowerCase());
  console.log(cocktail);

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-10 mx-auto">
          {loading && <h3 className="text-center">Loading Data</h3>}
          {loading && error && <h3 className="text-center">{error}</h3>}
          {!loading && cocktail.length > 0 && (
            <div>
              <h3 className="text-center">{name}</h3>
              <div className="card">
                <img src={cocktail[0].image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Ingredients:
                    {cocktail[0].ingredients.map((ingredient, index) => {
                      return (
                        <span className="text-muted ml-1">
                          {ingredient}
                          {index === cocktail[0].ingredients.length - 1
                            ? ""
                            : ","}
                        </span>
                      );
                    })}
                  </h5>
                  <p className="card-text text-muted">
                    {cocktail[0].instructions}
                  </p>
                  <Link
                    to="/"
                    className="d-block w-75 mx-auto text-center text-info"
                  >
                    Back to Main Page
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
