import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
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
        // <Router>
        //     <>
        //         <Switch>
        //             <Route exact path={"/"} render={() => true ? < UserPage /> : <Home />} />
        //             {/* <Route exact path={"/home"} render={() => <UserPage />} /> */}
        //             <PrivateRoute exact path={"/user"} component={UserPage} />
        //             <PrivateRoute exact path={"/profile/:id"} component={Profile} />
        //             <Route exact path={"/signup"} render={() => false ? < UserPage /> : <Signup />} />
        //             <Route exact path={"/login"} render={() => false ? < UserPage /> : <Login />} />
        //             <Route exact path={"/error"} render={() => <Error />} />
        //             <Redirect to="/error" />
        //         </Switch>
        //     </>
        // </Router>

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ BrowserRouter>
        </>
    );
}



