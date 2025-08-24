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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomJumbotron />
    <CustomCard></CustomCard>
  </React.StrictMode>
);
