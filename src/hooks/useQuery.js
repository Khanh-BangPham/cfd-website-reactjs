import { useEffect, useState } from "react";

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
  // console.log("got in useQuery", dependencyList, initialValue);
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    callback().then((res) => {
      // console.log("Done callback", res);
      setData(res.data);
      setLoading(false);
    });
  }, dependencyList);

  return { data, loading };
};

export default useQuery;
