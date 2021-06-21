import React, {  useState } from "react";
import "./App.css";
import "./theme.css";
import { Route, Switch, } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import PortfolioScreen from "./pages/portfolioScreen/PortfolioScreen";
import SinglePortfolio from "./pages/singlePortfolio/SinglePortfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import useGaTracker from "./components/useGaTracker";

function App() {
  useGaTracker()
  const [theme, setTheme] = useState("dark");

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={`App ${theme}`}>
      <div className="app-container">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolioscreen" component={PortfolioScreen} />
          <Route path="/singleportfolio/:slug" component={SinglePortfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <span className="footer">
          <Footer themeHandler={themeHandler} />
        </span>
      </div>
    </div>
  );
}

export default App;
