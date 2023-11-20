import { createSlice } from "@reduxjs/toolkit";
import { deleteCountry, getCountries, getCountry } from "./thunks";

const initialState = {
  countries: [],
  selectedCountry: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        if (!state.selectedCountry) {
          state.selectedCountry = payload[0];
        }
      })
      .addCase(deleteCountry.fulfilled, (state, { payload }) => {
        state.countries = state.countries.filter(({ id }) => id !== payload);
        state.selectedCountry =
          state.selectedCountry.id === payload
            ? state.countries[0].id === payload
              ? state.countries[1]
              : state.countries[0]
            : state.selectedCountry;
      })
      .addCase(getCountry.fulfilled, (state, { payload }) => {
        console.log("getCountry fulfilled: ", payload);
        state.selectedCountry = payload;
      });
  },
  reducers: {
    setSelectedCountry(state, { payload }) {
      state.selectedCountry = state.countries.find((c) => c.id === payload);
    },
  },
});

export default countriesSlice.reducer;

export const { setSelectedCountry } = countriesSlice.actions;
