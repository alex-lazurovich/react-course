/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Grid from "@mui/material/Grid";
import Expense from "../Expense/Expense";
import { memo } from "react";

const Expenses = memo(function Expenses({
  expenses,
  liftingDelete,
  liftingUpdate,
}) {
  const deleteHandler = (id) => {
    liftingDelete(id);
  };
  const updateHandler = (r) => {
    liftingUpdate(r);
  };
  console.log("expenses");
  return (
    <Grid>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          liftingDelete={deleteHandler}
          liftingUpdate={updateHandler}
        />
      ))}
    </Grid>
  );
});

export default Expenses;
