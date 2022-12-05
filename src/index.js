import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ConfigProvider } from 'antd';
import "./index.css";

ReactDOM.render(
    <>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#ffff',
      },
    }}
  >
        <App />
  </ConfigProvider>
    </>,
    document.getElementById("root")
);