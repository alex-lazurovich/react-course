import axios from "axios";

const API = "https://651a75ad340309952f0d50f5.mockapi.io/expenses";

const expenses = {
  getAll: () => axios.get(API).then(({ data }) => data),
};

export default expenses;
