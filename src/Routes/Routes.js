import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
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