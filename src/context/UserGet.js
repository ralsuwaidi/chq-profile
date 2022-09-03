import React, { useEffect, useState } from "react";
import axios from "axios";

// https://blog.openreplay.com/integrating-axios-with-react-hooks

export const useAsyncStuff = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users/2");

        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};
