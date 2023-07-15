<<<<<<< HEAD

import React, { useEffect } from "react"
import { Route, Redirect, useHistory } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("token");
    console.log("this", isAuthenticated);

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
=======

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
>>>>>>> 5f74c9335470d5c15c2f8bb5eb21baacb6e4f784
