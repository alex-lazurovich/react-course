import { useParams } from "react-router-dom";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectCountryAction } from "../store/countries/actions";


export default function CountryRoute() {
  const { id } = useParams();
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== selectedCountry.id) {
      dispatch(selectCountryAction(id));
    }
  }, [id, selectedCountry]);

  return (
    <>
      <h2>Additional info:</h2>
      <CountryInfo />
    </>
  );
}
