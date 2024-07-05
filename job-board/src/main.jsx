import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import router from "../src/Router/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import {
  disableReactDevTools,
  disbleReactDevTools,
} from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
