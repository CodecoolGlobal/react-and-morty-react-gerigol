import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => {
        // phantom catch for abort errors
      });

    return () => controller.abort();
  }, [url]);

  return { data };
};

export default useFetch;
