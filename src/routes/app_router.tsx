import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home_page";
import MovieInformationPage from "../pages/movie_information/movie_information_page";
import SearchResultPage from "../pages/search_result/search_result_page";

class AppRouter {
  static router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "movie/:id",
      element: <MovieInformationPage />,
    },
    {
      path: "search/:query",
      element: <SearchResultPage />,
    },
  ]);
}

export default AppRouter;
