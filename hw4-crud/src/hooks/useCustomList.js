import { useEffect, useState } from "react";
import expenses from "../services/expenses";
import { SortingTypes } from "../constants/sorting";
import { sortDates, sortNumbers, sortStrings } from "./../utils/sort";
import dayjs from "dayjs";

const useCustomList = () => {
  const [allExpenses, setAllExpenses] = useState([]);
  const [sortBy, setSortBy] = useState(SortingTypes.PRODUCT);
  const [displayedExpenses, setDisplayedExpenses] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    setDisplayedExpenses(() => {
      const toSort = [...allExpenses];
      let sortingFunction;
      if (sortBy === SortingTypes.DATE) sortingFunction = sortDates(sortBy);
      else if (sortBy === SortingTypes.PRICE)
        sortingFunction = sortNumbers(sortBy);
      else sortingFunction = sortStrings(sortBy);
      return toSort.sort(sortingFunction);
    });
  }, [allExpenses, sortBy]);

  useEffect(() => {
    setFilteredExpenses(() => {
      if (filtered) {
        const now = dayjs();
        const day = now.day();
        const month = now.month();
        const year = now.year();
        return [...displayedExpenses].filter((e) => {
          return (
            dayjs(e.date).year() === year &&
            dayjs(e.date).month() === month &&
            dayjs(e.date).day() === day
          );
        });
      }
      return displayedExpenses;
    });
  }, [filtered, displayedExpenses]);

  const sortHandler = (sortType) => {
    setSortBy(sortType);
  };

  const deleteItemHandler = (id) => {
    setAllExpenses((expenses) => expenses.filter((e) => e.id !== id));
  };

  const filterHandler = () => {
    setFiltered(!filtered);
  };

  const updateItemHandler = (item) =>
    setAllExpenses((expenses) =>
      expenses.map((expense) => (expense.id === item.id ? item : expense))
    );

  const createHandler = async () => {
    try {
      const added = await expenses.create({
        date: new Date().toString(),
        productName: "Added New Product",
        description: "Some description",
        cost: 99,
        currency: "USD",
      });
      setAllExpenses((expenses) => [...expenses, added]);
    } catch (e) {
      console.error(e);
    }
  };

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
  return {
    allExpenses,
    filteredExpenses,
    deleteItemHandler,
    updateItemHandler,
    sortHandler,
    createHandler,
    filterHandler,
  };
};

export default useCustomList;
