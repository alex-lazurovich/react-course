/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { SortingTypes } from "../../constants/sorting";

export default function SortTypeSelector({ liftingSortType }) {
  const [sortType, setSortType] = useState(SortingTypes.PRODUCT);

  const sortTypeChanged = (event) => setSortType(event.target.value);

  useEffect(() => {
    liftingSortType(sortType);
  }, [sortType]);

  return (
    <FormControl
      sx={{ textAlign: "left", border: "1px solid grey", padding: "5px" }}
    >
      <FormLabel>Sort by</FormLabel>
      <RadioGroup value={sortType} onChange={sortTypeChanged} row>
        <FormControlLabel
          control={<Radio />}
          label="date"
          value={SortingTypes.DATE}
        />
        <FormControlLabel
          control={<Radio />}
          label="cost"
          value={SortingTypes.PRICE}
        />
        <FormControlLabel
          control={<Radio />}
          label="product"
          value={SortingTypes.PRODUCT}
        />
        <FormControlLabel
          control={<Radio />}
          label="description"
          value={SortingTypes.DESCRIPTION}
        />
      </RadioGroup>
    </FormControl>
  );
}
