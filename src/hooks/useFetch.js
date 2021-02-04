import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [countries, setCountries] = useState({ loading: true, data: [] });

  const fetchQuestions = async (url) => {
    setCountries({ loading: true, data: [] });
    try {
      const responses = await fetch(url);
      const fetchData = await responses.json();

      setInterval(() => {
        setCountries({ loading: false, data: fetchData.results });
      }, 500);

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchQuestions(url);
  }, [url]);

  return countries;
};
