import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Components/Blog";
import Congress from "../Components/Congress";
import CourseDetails from "../Components/CourseDetails";
import Faq from "../Components/Faq";
import GetPremium from "../Components/GetPremium";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute";
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
            },
            {
                path: '/news',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/news/:id',
                element: <NewsDetails></NewsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/news/premium/:id',
                element: <PrivateRoute><GetPremium></GetPremium></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/news/premium',
                element: <Congress></Congress>
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