import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
