import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Checkout from "../Pages/Orders/Checkout";
import Orders from "../Pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
          loader: ({ params }) => fetch(`http://localhost:5000/guns/${params.id}`),
        
      },
    ],
  },
]);

export default router;