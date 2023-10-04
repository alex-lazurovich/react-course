import { Button, Switch, FormControlLabel, FormGroup } from "@mui/material";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import SortTypeSelector from "./components/SortTypeSelector/SortTypeSelector";
import useCustomList from "./hooks/useCustomList";
import useTheme from "./hooks/useTheme";

function App() {
  const {
    allExpenses,
    filteredExpenses,
    deleteItemHandler,
    updateItemHandler,
    sortHandler,
    createHandler,
    filterHandler,
  } = useCustomList();

  const { switchBackroundHandler, color } = useTheme();

  return (
    <>
      {allExpenses.length > 0 ? (
        <>
          <FormGroup className="form--controls" sx={{ backgroundColor: color }}>
            <FormControlLabel
              control={
                <Switch size="large" onChange={switchBackroundHandler} checked={color !== '#ffffff'}/>
              }
              label="Grey background"
            />
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
              control={<Switch size="large" onChange={filterHandler} />}
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
