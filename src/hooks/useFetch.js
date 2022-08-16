import { useState, useCallback } from "react";

import { db } from "backend";
import { ref, child, get } from "firebase/database";

const useFetch = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const fetchData = useCallback(async (collection, setData) => {
    setLoading(true);
    setError(false);
    get(child(ref(db), collection))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(
            Object.values(snapshot.val()).sort((a, b) => {
              const dateA = new Date(
                a?.released?.split("-").reverse().join("-")
              );
              const dateB = new Date(
                b?.released?.split("-").reverse().join("-")
              );
              return dateB - dateA;
            })
          );
        } else {
          setError(true);
          setData([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setData([]);
      });
  }, []);

  return {
    isLoading,
    hasError,
    fetchData,
  };
};

export { useFetch };
export default useFetch;
