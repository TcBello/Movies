import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home_page";

class AppRouter {
  static router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
}

export default AppRouter;
