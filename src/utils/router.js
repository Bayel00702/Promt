import {useRoutes} from "react-router-dom";
import Home from '../pages/Home/Home'
import Layout from "../components/Layout/Layout";
import Catalog from "../pages/Catalog/Catalog";
import AddDeclaration from "../pages/AddDeclaration/AddDeclaration";
import Declaration from "../pages/Declaration/Declaration";
import LogIn from "../pages/LogIn/LogIn";
import OneUser from "../pages/OneUser/OneUser";
import Register from "../pages/Register/Register";
import Room from "../pages/Room/Room";
import Error from "../pages/Error/Error";
import Favorites from "../pages/Favorites/Favorites";


export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/catalog',
                    element: <Catalog/>
                },
                {
                    path: '/adddeclaration',
                    element: <AddDeclaration/>
                },
                {
                    path: '/favorites',
                    element: <Favorites/>
                },
                {
                    path: '/declaration/:id',
                    element: <Declaration/>
                },
                {
                    path: '/oneuser/:id',
                    element: <OneUser/>
                },
                {
                    path: '/room',
                    element: <Room/>
                },
                {
                    path: '/*',
                    element: <Error/>
                },
            ]
        },
        {
            path: '/LogIn',
            element: <LogIn/>
        },
        {
            path: '/Register',
            element: <Register/>
        },


    ]);
    return routes
}