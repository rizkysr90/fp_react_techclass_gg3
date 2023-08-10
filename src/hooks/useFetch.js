import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true);
        const response = await fetch(url).then((res) => res.json());
        setData(response);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [url]);
  return { data, error, loading };
}
