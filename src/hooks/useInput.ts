import { ChangeEvent, useState } from "react";

type UseInputReturn<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = <T extends string | number>(
  initialValue: T,
): UseInputReturn<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof initialValue === "number") {
      setValue(+e.target.value as T);
    } else {
      setValue(e.target.value as T);
    }
  };

  return [value, changeHandler];
};

export default useInput;
