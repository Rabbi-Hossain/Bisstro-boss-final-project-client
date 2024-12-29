import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            }
        ]
    }
])