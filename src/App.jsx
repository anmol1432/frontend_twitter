import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./pages/Login/index";
import Signup from "./pages/signup/index";
import Home from "./pages/Home/index";
import Profile from "./pages/Profile/index";
import UserPage from "./pages/UserPage/index";
import PrivateRoute from "./components/PrivateRoute/index";
import Error from "./pages/404/index";
import storageKeys from "./services/localStorageKeys";


export const App = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path={"/"} render={() => localStorage.getItem(storageKeys.token) ? < UserPage /> : <Home />} />
                    {/* <Route exact path={"/home"} render={() => <UserPage />} /> */}
                    <PrivateRoute exact path={"/user"} component={UserPage} />
                    <PrivateRoute exact path={"/profile/:id"} component={Profile} />
                    <Route exact path={"/signup"} render={() => localStorage.getItem(storageKeys.token) ? < UserPage /> : <Signup />} />
                    <Route exact path={"/login"} render={() => localStorage.getItem(storageKeys.token) ? < UserPage /> : <Login />} />
                    <Route exact path={"/error"} render={() => <Error />} />
                    <Redirect to="/error" />
                </Switch>
            </>
        </Router>
    );
}



