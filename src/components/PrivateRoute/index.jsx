
import React from "react"
import { Route, Redirect } from "react-router-dom"

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
