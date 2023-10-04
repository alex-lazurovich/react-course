import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
  const { value, setValue } = useLocalStorage("#ffffff");

  function switchBackroundHandler() {
    setValue((value) => (value === "#80808066" ? "#ffffff" : "#80808066"));
  }

  return { switchBackroundHandler, color: value };
};

export default useTheme;
