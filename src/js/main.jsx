import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import CustomJumbotron from "./components/CustomJumbotron";
import { CustomCard } from "./components/CustomCard";
import { Navbar } from "./components/Navbar"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <CustomJumbotron />
    <CustomCard></CustomCard>
  </React.StrictMode>
);
