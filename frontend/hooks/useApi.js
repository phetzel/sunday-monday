import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

    setLoading(true);
    apiFunc().then(response => {
        setLoading(false);
        setData(response);
    }, err => {
        setError(err)
    })

  return { data, error, loading };
};

export default useApi;
