/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";

type ResponseType<TCallback> = {
  isError: boolean;
  data?: TCallback;
  message?: string;
};

type CallAPIReturnInfo<TData> = {
  data: TData | null;
  loading: boolean;
  isError: boolean;
  refetch: () => void;
};

const useCallAPI = <T>(
  callback: () => Promise<ResponseType<T>>,
): CallAPIReturnInfo<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    const result = await callback();

    if (result.isError) {
      setIsError(true);
    }

    setTimeout(() => {
      setData(result.data!);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetchData();

    return () => {
      setLoading(true);
      setIsError(false);
    };
  }, [fetchData]);

  return { data, loading, isError, refetch: fetchData };
};

export default useCallAPI;
