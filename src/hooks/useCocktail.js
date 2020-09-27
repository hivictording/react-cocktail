import { useState, useEffect } from "react";

import axios from "axios";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

export const useCocktail = () => {
  const [search, setSearch] = useState("a");

  useEffect(() => {
    const fetchData = async (url) => {
      let response = await axios.get(url);
      console.log(response);
      return response;
    };

    fetchData(`${baseURL}${search}`);
  }, [search]);

  return [search, setSearch];
};
