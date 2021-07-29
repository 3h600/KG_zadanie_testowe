import { useEffect, useState } from 'react';

const useFetch = (
  url = 'http://localhost:8081/products',
  options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      });
    return () => (isMounted = false);
  }, [url, options]);
  return { data, error };
};

export default useFetch;
