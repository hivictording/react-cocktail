import { useState, useEffect } from "react";

import axios from "axios";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const useCocktails = (search) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      let newCocktails = [];
      let newError = "";
      if (search) {
        try {
          const response = await axios.get(`${baseURL}${search}`);

          // if (response) {
          const data = response.data.drinks;
          // newCocktails
          newCocktails = data.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strInstructions } = item;
            let ingredients = [];
            for (const [key, value] of Object.entries(item)) {
              if (key.includes("Ingredient") && value) {
                ingredients.push(value);
              }
            }

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              ingredients,
              instructions: strInstructions,
            };
          });
          // end of newCocktails
          newError = "";
        } catch (error) {
          newError = "No Cocktails Found";
          newCocktails = [];
        }
      } else {
        newError = "";
        newCocktails = [];
      }

      setError(newError);
      setCocktails(newCocktails);
    };

    fetchData();
    setLoading(false);
  }, [search]);

  return [cocktails, loading, error];
};
