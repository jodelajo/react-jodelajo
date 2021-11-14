import React, { useState } from "react";
import "./App.css";
import "./theme.css";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import PortfolioScreen from "./pages/portfolioScreen/PortfolioScreen";
import SinglePortfolio from "./pages/singlePortfolio/SinglePortfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import UseMediaQuery from "./components/UseMediaQuery";
import useGaTracker from "./components/useGaTracker";

function App() {
  useGaTracker();
  const [theme, setTheme] = useState("dark");
  const isActive = UseMediaQuery("(min-width: 992px)");
  const history = useHistory();
  let slug = history.location.pathname;

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
        {!isActive  || slug !== "/" ? <NavBar /> : null}

        <Switch>
          <Route exact path="/">
            {isActive  ? <Landing /> : <Home/> }
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/portfolioscreen" component={PortfolioScreen} />
          <Route path="/singleportfolio/:slug" component={SinglePortfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <span className="footer">
          {!isActive || slug !=="/" ? <Footer themeHandler={themeHandler} />: null}
        </span>
      </div>
    </div>
  );
}

export default App;