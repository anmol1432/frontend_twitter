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
);