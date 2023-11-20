import axios from "axios";

const API = "https://651a75ad340309952f0d50f5.mockapi.io/countries";

const countries = {
  getCoutries: () => axios.get(API).then(({ data }) => data),
  deleteCountry: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
};

export default countries;
