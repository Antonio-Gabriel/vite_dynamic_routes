import { useRoutes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return routes;
}
