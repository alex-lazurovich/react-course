import {
  Button,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import SortTypeSelector from "./components/SortTypeSelector/SortTypeSelector";
import useCustomList from "./hooks/useCustomList";

function App() {
  const {
    allExpenses,
    filteredExpenses,
    deleteItemHandler,
    updateItemHandler,
    sortHandler,
    createHandler,
    filterHandler
  } = useCustomList();
  return (
    <>
      {allExpenses.length > 0 ? (
        <>
          <FormGroup>
            <SortTypeSelector liftingSortType={sortHandler} />
            <Button
              color="info"
              variant="contained"
              sx={{ margin: "10px 0" }}
              onClick={createHandler}
            >
              CREATE NEW
            </Button>

            <FormControlLabel
              control={<Switch size="large" onChange={filterHandler}/>}
              label="Only created today"
            />
          </FormGroup>

          <Expenses
            expenses={filteredExpenses}
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
