import { useParams } from "react-router-dom";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSelectedCountry } from "../store/countries/reducer";
import { getCountry } from "../store/countries/thunks";

export default function CountryRoute() {
  const { id } = useParams();
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedCountry) {
      dispatch(getCountry(id));
    }
  }, []);

  useEffect(() => {
    if (selectedCountry && id !== selectedCountry.id) {
      dispatch(setSelectedCountry(id));
    }
  }, [id, selectedCountry]);

  return (
    <>
      <h2>Additional info:</h2>
      <CountryInfo />
    </>
  );
}
