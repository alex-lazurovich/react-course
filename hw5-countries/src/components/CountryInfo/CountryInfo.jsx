import { useSelector, useDispatch } from "react-redux";
import { deleteCountryThunk } from "../../store/countries/thunks";
import { useNavigate } from "react-router-dom";

export default function CountryInfo() {
  const country = useSelector((state) => state.countries.selectedCountry);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteCountryThunk(country.id));
    navigate("/countries");
  };

  return country ? (
    <>
      <h1>{country.name}</h1>
      <h3>Capital: {country.capital}</h3>
      <h3>Population: {country.population}</h3>
      <button onClick={deleteHandler}>delete</button>
    </>
  ) : null;
}
