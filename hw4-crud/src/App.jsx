import "./App.css";
import { useEffect, useState } from "react";
import expenses from "./services/expenses";
import Expenses from "./components/Expenses/Expenses";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const sortingValues = {
  date: "date",
  product: "productName",
  cost: "cost",
  description: "description",
  currency: "currency",
};

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
  const [sortBy, setSortBy] = useState(sortingValues.product);
  const [sortedExpenses, setSortedExpenses] = useState([...allExpenses]);

  useEffect(() => {
    setSortedExpenses((expenses) => {
      const toSort = expenses.length ? [...expenses] : allExpenses;
      let sortingFunction;
      if (sortBy === sortingValues.date) sortingFunction = sortDates(sortBy);
      else if (sortBy === sortingValues.cost)
        sortingFunction = sortNumbers(sortBy);
      else sortingFunction = sortStrings(sortBy);
      return toSort.sort(sortingFunction);
    });
  }, [allExpenses, sortBy]);

  const sortHandler = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expenses.getAll();
        console.log(data);
        setAllExpenses(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <>
      <FormControl
        sx={{ textAlign: "left", border: "1px solid grey", padding: "5px" }}
      >
        <FormLabel>Sort by</FormLabel>
        <RadioGroup
          defaultValue={sortingValues.date}
          value={sortBy}
          onChange={sortHandler}
          row
        >
          <FormControlLabel
            control={<Radio />}
            label="date"
            value={sortingValues.date}
          />
          <FormControlLabel
            control={<Radio />}
            label="cost"
            value={sortingValues.cost}
          />
          <FormControlLabel
            control={<Radio />}
            label="product"
            value={sortingValues.product}
          />
          <FormControlLabel
            control={<Radio />}
            label="description"
            value={sortingValues.description}
          />
        </RadioGroup>
      </FormControl>
      {allExpenses.length > 0 ? (
        <Expenses expenses={sortedExpenses} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
