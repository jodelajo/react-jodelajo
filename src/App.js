import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import "./theme.css";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Landing from "../src/pages/landing/Landing";
import Footer from "./components/footer/Footer";
import UseMediaQuery from "./components/UseMediaQuery";
import useGaTracker from "./components/useGaTracker";

function App() {
  useGaTracker();
  const [theme, setTheme] = useState("dark");
  const isActive = UseMediaQuery("(min-width: 992px)");
  const history = useHistory();
  let slug = history.location.pathname;
  // const LandingLazy = lazy(() => import('../src/pages/landing/Landing'))
  const HomeLazy = lazy(() => import("../src/pages/home/Home"));
  const PortLazy = lazy(() =>
    import("../src/pages/portfolioScreen/PortfolioScreen")
  );
  const SingPortLazy = lazy(() =>
    import("../src/pages/singlePortfolio/SinglePortfolio")
  );
  const AboutLazy = lazy(() => import("../src/pages/about/About"));
  const ContactLazy = lazy(() => import("../src/pages/contact/Contact"));

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={`App ${theme}`}>
      <Suspense fallback={<div className="fallback"></div>}>
        <div className="app-container">
          {!isActive || slug !== "/" ? <NavBar /> : null}

          <Switch>
            {isActive && isActive ? (
              <Route exact path="/" component={Landing} />
            ) : (
              <Route exact path="/" component={HomeLazy} />
            )}

            {isActive && <Route exact path="/" component={Landing} />}
            <Route path="/home" component={HomeLazy} />
            <Route path="/portfolioscreen" component={PortLazy} />
            <Route path="/singleportfolio/:slug" component={SingPortLazy} />
            <Route path="/about" component={AboutLazy} />
            <Route path="/contact" component={ContactLazy} />
          </Switch>

          <span className="footer">
            {!isActive || slug !== "/" ? (
              <Footer themeHandler={themeHandler} />
            ) : null}
          </span>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
