import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routerConfig";

export default function Router() {
  const router = createBrowserRouter(ROUTES);
  return <RouterProvider router={router}></RouterProvider>;
}
