import { NavLink } from "react-router-dom";
import "./navigationn-styles.scss";

export default function Navigation() {
  const getNavLinkClass = ({isActive}) => (isActive ? "nav-link--active" : "");

  return (
    <ul>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/countries" className={getNavLinkClass}>Countries</NavLink>
      </li>
    </ul>
  );
}
