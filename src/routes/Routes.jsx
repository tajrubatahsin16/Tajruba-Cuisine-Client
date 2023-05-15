import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Blogs from "../pages/Components/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Recipe from "../pages/Chef/Recipe";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'blog',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-server-eta-five.vercel.app/chef/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
]);

export default router;