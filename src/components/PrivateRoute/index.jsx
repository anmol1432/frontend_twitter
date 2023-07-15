
import React from "react"
import { Route, redirect } from "react-router-dom"
import storageKeys from "../../services/localStorageKeys";

export const PrivateRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem(storageKeys.token);
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : redirect("/login")
            }
        />
    );
}

export default PrivateRoute;
