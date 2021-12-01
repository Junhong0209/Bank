import { useCallback, useState, ChangeEvent, Dispatch, SetStateAction } from "react"

const useInput = <T,>(initValue: T): [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;