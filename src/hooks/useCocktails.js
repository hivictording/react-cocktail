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
      if (search) {
        try {
          const response = await axios.get(`${baseURL}${search}`);
          const data = response.data.drinks;
          console.log(data);
          const mappedCocktails = data.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strInstructions } = item;
            let ingredients = [];
            for (const [key, value] of Object.entries(item)) {
              if (key.includes("Ingredient") && value) {
                ingredients.push(value);
              }
            }
            // const chineseName = item[strDrinkZH - HANS];

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              ingredients,
              instructions: strInstructions,
            };
          });

          setCocktails(mappedCocktails);
        } catch (error) {
          setError("Error Fetching Data From Backend");
        }
      } else {
        setCocktails([]);
      }
    };

    fetchData();
    setLoading(false);
  }, [search]);

  return [cocktails, loading, error];
};
