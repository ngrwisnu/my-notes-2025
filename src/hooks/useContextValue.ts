import { useEffect, useState } from "react";

const useContextValue = <T>(
  key: string,
  initialValue: T,
  effectCallback?: (value: T) => void,
) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

    if (effectCallback) {
      effectCallback(value);
    }
  }, [key, value, effectCallback]);

  return [value, setValue];
};

export default useContextValue;
