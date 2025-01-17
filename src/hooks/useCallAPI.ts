import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const useCallAPI = (
  callback: (formData?: any) => Promise<{ isError: boolean; data: any }>,
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await callback();

      if (result.isError) {
        setIsError(true);
      }

      setData(result.data);
      setLoading(false);
    };

    fetchData();

    return () => {
      setLoading(true);
      setIsError(false);
    };
  }, []);

  return { data, loading, isError };
};

export default useCallAPI;
