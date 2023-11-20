import { createAction } from "../../utils/actionsCreator";

export const SET_COUNTRIES_LIST = "set-countrites-list";
export const DELETE_COUNTRY = "delete-country";
export const SELECT_COUNTRY = "select-country";

const setCountriesAction = (payload) =>
  createAction(SET_COUNTRIES_LIST, payload);

const deleteCountryAction = (payload) => createAction(DELETE_COUNTRY, payload);

const selectCountryAction = (payload) => createAction(SELECT_COUNTRY, payload);

export { setCountriesAction, deleteCountryAction, selectCountryAction };
