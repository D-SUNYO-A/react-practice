import { useEffect, useState } from "react";
import local from "../utils/local";

const useLocalStorageState = (key, value) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    local.set(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
