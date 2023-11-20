import { DELETE_COUNTRY, SET_COUNTRIES_LIST, SELECT_COUNTRY } from "./actions";

const initialState = {
  countries: [],
  selectedCountry: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES_LIST:
      return { ...state, countries: payload, selectedCountry: payload[0] };
    case DELETE_COUNTRY:
      console.log("delete: payload = ", payload);
      console.log("delete: selected = ", state.selectedCountry.id);

      return {
        ...state,
        countries: state.countries.filter(({ id }) => id != payload),
        selectedCountry:
          state.selectedCountry.id === payload
            ? state.countries[0].id === payload
              ? state.countries[1]
              : state.countries[0]
            : state.selectedCountry,
      };
    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: state.countries.find(
          (country) => country.id === payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
