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
  // const [fallBack, setFallBack] = useState("fallbackLanding");
  const isActive = UseMediaQuery("(min-width: 992px)");
  const history = useHistory();
  let slug = history.location.pathname;
 

// useEffect(() => {
//   function fallbackHandler () {
//     if (slug === "/" && isActive){
//     setFallBack("fallbackLanding")
//   } else {
//     setFallBack("fallback")
//   }
//   }
//   fallbackHandler()
// },[slug, isActive])


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
          {!isActive || slug !== "/" ? <NavBar /> : null}

          <Switch>
            {isActive ? (
              <Route exact path="/" component={Landing} />
            ) : (
              <Route exact path="/" component={HomeLazy} />
            )}

            {isActive && <Route exact path="/" component={Landing} />}
            <Route exact path="/home" component={HomeLazy} />
            <Route  path="/portfolioscreen" component={PortLazy} />
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
     
    </div>
    </Suspense>
  );
}

export default App;
