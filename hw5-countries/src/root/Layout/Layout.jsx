import { Outlet } from "react-router-dom";
import "./layout-styles.scss";

export default function Layout() {
  return (
    <div className="page--container">
      <Outlet />
    </div>
  );
}
