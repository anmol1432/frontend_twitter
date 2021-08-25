import Home from "./pages/Home/index";
import Error from "./pages/404/index";
import Login from "./pages/Login/index";


export const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/error",
        component: Error
    },
    {
        path: "/",
        component: Home
    },
];