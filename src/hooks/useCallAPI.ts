/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { NoteObject } from "../types/note";

type ResponseType = {
  isError: boolean;
  data?: NoteObject[];
  message?: string;
};

const useCallAPI = (callback: () => Promise<ResponseType>) => {
  const [data, setData] = useState<NoteObject[] | null>(null);
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
