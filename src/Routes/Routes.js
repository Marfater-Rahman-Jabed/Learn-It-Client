import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Components/Blog";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import TermsAndConditions from "../Components/TermsAndConditions";
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
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
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