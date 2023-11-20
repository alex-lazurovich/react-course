import { configureStore } from "@reduxjs/toolkit";
import countries from "../store/countries/reducer";

const store = configureStore({
  reducer: { countries },
});

export default store;
