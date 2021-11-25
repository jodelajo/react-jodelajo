import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import PortfolioContextProvider from '../src/context/PortfolioContext'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PortfolioContextProvider>
      <App />
      </PortfolioContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
