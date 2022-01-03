import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import "./theme.css";
import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Landing from "../src/pages/landing/Landing";
import Footer from "./components/footer/Footer";
import UseMediaQuery from "./components/UseMediaQuery";
import useGaTracker from "./components/useGaTracker";

function App() {
  useGaTracker();
  const [theme, setTheme] = useState("dark");
  const [notFound, setNotFound] = useState(true);
  const [neonText, setNeonText] = useState("jodelajo");
  const isActive = UseMediaQuery("(min-width: 992px)");

  let location = useLocation();
  let slug = location.pathname;
  let key = location.key;


  function pageNotFound() {
    if (key !== undefined) {
      setNotFound(false);
      setNeonText("jodelajo");
    }
    if (key === undefined) {
      setNotFound(true);
      setNeonText("404");
    }
    if (slug === "/") {
      setNotFound(true);
      setNeonText("jodelajo");
    }
  }

  useEffect(() => {
    pageNotFound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

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
    <Suspense fallback={<div className={"fallBack"}></div>}>
      <div className={`App ${theme}`}>
        <div className="app-container">
          {!isActive || !notFound ? <NavBar /> : null}
          <Switch>
            {isActive ? (
              <Route exact path="/">
                <Landing text={neonText} />
              </Route>
            ) : (
              <Route exact path="/" component={HomeLazy} />
            )}

            {isActive && (
              <Route exact path="/">
                <Landing text={neonText} />
              </Route>
            )}
            <Route exact path="/home" component={HomeLazy} />
            <Route path="/portfolioscreen" component={PortLazy} />
            <Route path="/singleportfolio/:slug" component={SingPortLazy} />
            <Route path="/about" component={AboutLazy} />
            <Route path="/contact" component={ContactLazy} />
            <Route>
              <Landing text={neonText} />
            </Route>
          </Switch>

          <span className="footer">
            {!isActive || !notFound ? (
              <Footer themeHandler={themeHandler} />
            ) : null}
          </span>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
