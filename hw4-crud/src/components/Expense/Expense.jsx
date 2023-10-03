/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "@mui/material/Card";

export default function Expense({ expense }) {
  const { date, productName, cost, currency, description } = expense;

  const formattedDate = () => new Date(date).toDateString();

  return (
    <Card sx={{ maxWidth: 800, margin: 3, padding: 3, textAlign:"left"}}>
      <h2>{productName}</h2>
      <p>{description}</p>
      <div>
        Price: {cost} {currency}
      </div>
      <div>{formattedDate()}</div>
    </Card>
  );
}
