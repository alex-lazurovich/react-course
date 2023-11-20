import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../store/countries/thunks";
import "./CountrySelectorStyles.scss";
import { setSelectedCountry } from "../../store/countries/reducer";

export default function CountrySelector() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries.countries);
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  const navigate = useNavigate();

  const readMoreHandler = () => {
    navigate(`/countries/${selectedCountry.id.toString()}`);
  };

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountries());
    }
  }, []);

  const selectCountryHandler = (e) => {
    console.log(e.target.value);
    dispatch(setSelectedCountry(e.target.value));
  };

  return countries.length ? (
    <div className="coutry-selector--container">
      <div>
        <h3>
          {(selectedCountry && selectedCountry.name) || countries[0].name}
        </h3>
      </div>
      <select onChange={selectCountryHandler}>
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.capital}
            </option>
          );
        })}
      </select>
      <button onClick={readMoreHandler}>Read More</button>
    </div>
  ) : null;
}
