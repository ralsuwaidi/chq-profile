import React, { useEffect, useState } from "react";


// https://blog.openreplay.com/integrating-axios-with-react-hooks

export const useAsyncStuff = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncStuff = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users/2");
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    };

    loadAsyncStuff();
  }, []);

  return { data, error, loaded };
};
