import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
