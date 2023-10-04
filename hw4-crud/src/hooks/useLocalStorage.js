import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const v = localStorage.getItem(key);
      if (v) {
        return JSON.parse(v);
      }
    } catch (e) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return {
    setValue,
    value,
  };
};
export default useLocalStorage;
