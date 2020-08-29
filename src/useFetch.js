import { useState, useEffect } from 'react';

const fetchResource = async ({url, onStart, onLoading, onSuccess, onError}) => {
  try {
    onLoading(true);
    onStart();
    onError(null);

    const response = await fetch(url);
    const jsonResponse = await response.json();

    onSuccess(jsonResponse)
  } catch (err) {
    onError(err);
  } finally {
    onLoading(false);
  }
};

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResource({
      url,
      onStart: () => setResponse(null),
      onLoading: (val) => setLoading(val),
      onSuccess: (val) => setResponse(val),
      onError: (val) => setError(val)
    });
  }, [url]);

  return [response, loading, error];
};
