import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCountries,
  deleteCountry,
} from "../../store/countries/thunks";
import "./CountriesListStyles.scss";

export default function CountriesList() {
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  const countryClickHandler = (e) => {
    navigate(`/countries/${e.id}`);
  };

  const deleteCountryHandler = (id) => {
    dispatch(deleteCountry(id));
  };

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountries());
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
