import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "./pages/Home/index";
import UserPage from "./pages/UserPage/index";
import Error from "./pages/404/index";
import Login from "./pages/Login/index";


export const App = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path={"/"} render={() => <Home />} />
                    <Route exact path={"/home"} render={() => <UserPage />} />
                    <Route exact path={"/login"} render={() => <Login />} />
                    <Route exact path={"/error"} render={() => <Error />} />
                    <Redirect to="/error" />
                </Switch>
            </>
        </Router>
    );
}



