import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuperHeroListPage from "./pages/SuperHeroListPage/SuperHeroListPage";
import SuperHeroItemPage from "./pages/SuperHeroItemPage/SuperHeroItemPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SuperHeroListPage />,
    },
    { path: "/superhero/:id", element: <SuperHeroItemPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
