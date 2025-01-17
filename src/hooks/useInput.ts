import { ChangeEvent, useState } from "react";

type UseInputReturn<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  boolean,
];

const useInput = <T extends string | number>(
  initialValue: T,
): UseInputReturn<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const [hasEntered, setHasEntered] = useState(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setHasEntered(true);
    if (typeof initialValue === "number") {
      setValue(+e.target.value as T);
    } else {
      setValue(e.target.value as T);
    }
  };

  return [value, changeHandler, hasEntered];
};

export default useInput;
