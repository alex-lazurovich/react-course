import api from "../../services/countries";
import {
  setCountriesAction,
  deleteCountryAction,
} from "../../store/countries/actions";

export const getCountriesThunk = () => {
  return async (dispatch) => {
    try {
      const countries = await api.getCoutries();
      console.log(setCountriesAction(countries))
      dispatch(setCountriesAction(countries));
    } catch (e) {
      console.error(e);
    }
  };
};

export const deleteCountryThunk = (id) => async (dispatch) => {
  try {
    await api.deleteCountry(id);
    dispatch(deleteCountryAction(id));
  } catch (e) {
    console.error(e);
  }
};
