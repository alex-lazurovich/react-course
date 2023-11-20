import { configureStore } from "@reduxjs/toolkit";
import countries from "./countries/reducer";

const store = configureStore({
  reducer: { countries },
});

export default store;
