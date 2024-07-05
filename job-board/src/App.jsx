import { useState } from "react";
import { disbleReactDevTools } from "@fvilers/disable-react-devtools";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
