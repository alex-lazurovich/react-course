/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import expenses from "../../services/expenses";

const Expense = React.memo(function Expense({
  expense,
  liftingDelete,
  liftingUpdate,
}) {
  const { date, productName, cost, currency, description, id } = expense;

  console.log("### in Expense");

  const formattedDate = () => new Date(date).toDateString();

  const deleteHandler = async () => {
    try {
      const r = await expenses.delete(id);
      liftingDelete(r.id);
    } catch (e) {
      console.log(e);
    }
  };

  const changeDateHandler = async (e) => {
    console.log("changeDateHandler");
    try {
      const r = await expenses.update(id, {
        ...expense,
        date: e.toString(),
      });
      liftingUpdate(r);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: 3, padding: 3, textAlign: "left" }}>
      <h2>{productName}</h2>
      <p>{description}</p>
      <div>
        Price: {cost} {currency}
      </div>
      <div>
        <div>Date: {formattedDate()}</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={dayjs(date)}
            label="Update date"
            sx={{ marginTop: 2 }}
            onChange={changeDateHandler}
          />
        </LocalizationProvider>
      </div>
      <Button
        color="error"
        variant="outlined"
        sx={{ marginTop: "10px" }}
        onClick={deleteHandler}
      >
        delete
        <DeleteForeverIcon />ź
      </Button>
    </Card>
  );
});
export default Expense;
