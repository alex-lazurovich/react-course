import "./App.css";
import { useEffect, useState } from "react";
import expenses from "./services/expenses";
import Expenses from "./components/Expenses/Expenses";
import SortTypeSelector from "./components/SortTypeSelector/SortTypeSelector";
import { SortingTypes } from "./constants/sorting";

const sortNumbers = (key) => (a, b) => a[key] - b[key];
const sortStrings = (key) => (a, b) => {
  const nameA = a[key].toUpperCase();
  const nameB = b[[key]].toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
const sortDates = (key) => (a, b) => new Date(a[key]) - new Date(b[key]);

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [sortBy, setSortBy] = useState(SortingTypes.PRODUCT);
  const [sortedExpenses, setSortedExpenses] = useState([]);

  useEffect(() => {
    setSortedExpenses(() => {
      const toSort = [...allExpenses];
      let sortingFunction;
      if (sortBy === SortingTypes.DATE) sortingFunction = sortDates(sortBy);
      else if (sortBy === SortingTypes.PRICE)
        sortingFunction = sortNumbers(sortBy);
      else sortingFunction = sortStrings(sortBy);
      return toSort.sort(sortingFunction);
    });
  }, [allExpenses, sortBy]);

  const sortHandler = (sortType) => {
    setSortBy(sortType);
  };

  const deleteItemHandler = (id) => {
    setAllExpenses((expenses) => expenses.filter((e) => e.id !== id));
  };

  const updateItemHandler = (item) =>
    setAllExpenses((expenses) =>
      expenses.map((expense) => (expense.id === item.id ? item : expense))
    );

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expenses.getAll();
        setAllExpenses(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <>
      {allExpenses.length > 0 ? (
        <>
          <SortTypeSelector liftingSortType={sortHandler} />
          <Expenses
            expenses={sortedExpenses}
            liftingDelete={deleteItemHandler}
            liftingUpdate={updateItemHandler}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
