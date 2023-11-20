import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCountriesThunk,
  deleteCountryThunk,
} from "../../store/countries/thunks";
import "./CountriesListStyles.scss";

export default function CountriesList() {
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  const countryClickHandler = (e) => {
    console.log(e);
    navigate(`/countries/${e.id}`);
  };

  const deleteCountryHandler = (id) => {
    dispatch(deleteCountryThunk(id));
  };

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountriesThunk());
    }
  }, []);

  return countries.length
    ? countries.map((country) => (
        <div key={country.id} className="item--container">
          <div onClick={() => countryClickHandler(country)}>{country.name}</div>
          <button onClick={() => deleteCountryHandler(country.id)}>
            Delete
          </button>
        </div>
      ))
    : null;
}
