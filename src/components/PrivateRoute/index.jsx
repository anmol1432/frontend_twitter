
import React from "react"
import { Route, Redirect } from "react-router-dom"
import storageKeys from "../../services/localStorageKeys";

export const PrivateRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem(storageKeys.token);
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}

export default PrivateRoute;
