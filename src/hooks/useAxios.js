import { useState, useEffect } from "react";

/**
 *
 * @param {function} callback - client api request function
 * @returns data - the result of the api request, loading - loading state of the api request, error - error state of the api request
 */
export const useAxios = (callback) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await callback();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
