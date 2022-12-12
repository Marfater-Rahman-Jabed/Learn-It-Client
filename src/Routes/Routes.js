import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])


const Routes = () => {

    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default Routes;