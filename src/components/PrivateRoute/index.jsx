
import React from "react"
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ path, Component, rest }) => {
    console.log("asdfasdfasd")
    // const authentication = true
    return (<Route
        exact
        path={path}
        render={(rest) => {
            if (true) {
                return <Component />
            }
            <Redirect to="/" />
        }}
    />)
};
