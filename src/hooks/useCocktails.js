import { useState, useEffect } from "react";

import axios from "axios";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

export const useCocktails = (search) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState("true");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        let response = await axios.get(`${baseURL}${search}`);
        setCocktails(response.data.drinks);
      } else {
        setCocktails();
      }
    };

    fetchData();
  }, [search]);

  return [cocktails, loading, error];
};
