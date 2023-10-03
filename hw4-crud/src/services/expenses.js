import axios from "axios";

const API = "https://651a75ad340309952f0d50f5.mockapi.io/expenses";

const expenses = {
  getAll: () => axios.get(API).then(({ data }) => data),
  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),
  update: (id, payload) =>
    axios.put(`${API}/${id}`, payload).then(({ data }) => data),
};

export default expenses;
