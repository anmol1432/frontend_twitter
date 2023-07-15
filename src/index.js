<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import { App } from "./App";
import ErrorBoundary  from "./components/ErrorBoundary";
import "./index.css";

ReactDOM.render(
    <>
        <CookiesProvider>
            <ErrorBoundary>
                    <App />
            </ErrorBoundary>
        </CookiesProvider>
    </>,
    document.getElementById("root")
=======
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById("root")
>>>>>>> 5f74c9335470d5c15c2f8bb5eb21baacb6e4f784
);