import Root from "../root/Root";
import CountriesRoute from "../routes/CountriesRoute";
import HomeRoute from "./../routes/HomeRoute";
import CountryRoute from "../routes/CountryRoute";

export const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/countries",
        element: <CountriesRoute />,
      },
      {
        path: "/countries/:id",
        element: <CountryRoute />,
      },
    ],
  },
];
