import { createBrowserRouter } from "react-router-dom";
import { CategoryNews, Home, Layout, Categories, PageNotFound, Search } from "../pages";
import { getNewsByCategory } from "../pages/CategoryNews";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:name",
        element: <CategoryNews />,
        loader: getNewsByCategory,
      },
      {
        path: '/search',
        element: <Search />
      },
    ],
  },
]);
