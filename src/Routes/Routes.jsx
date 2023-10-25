import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Layout/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CheckOutDetails from "../Pages/CheckOut/CheckOutDetails";
import PrivateRoute from "../Providers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute><CheckOutDetails /></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    },
]);

export default router;