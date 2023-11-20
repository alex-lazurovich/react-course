import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/countries";

export const getCountries = createAsyncThunk(
  "countries/getCoutries",
  async () => {
    try {
      const countries = await api.getCoutries();
      return countries;
    } catch (e) {
      return [];
    }
  }
);

export const getCountry = createAsyncThunk(
  "countries/getCountry",
  async (id) => {
    try {
      const country = await api.getCountry(id);
      return country;
    } catch (e) {
      console.error(e);
    }
  }
);

export const deleteCountry = createAsyncThunk(
  "countries/deleteCountry",
  async (id) => {
    try {
      const removed = await api.deleteCountry(id);
      return removed.id;
    } catch (e) {
      console.error(e);
      return id;
    }
  }
);
