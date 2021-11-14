import React, {  useState } from "react";
import "./App.css";
import "./theme.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import PortfolioScreen from "./pages/portfolioScreen/PortfolioScreen";
import SinglePortfolio from "./pages/singlePortfolio/SinglePortfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import UseMediaQuery from "./components/UseMediaQuery"
import useGaTracker from "./components/useGaTracker";
import { useEffect } from "react/cjs/react.development";

function App() {
  useGaTracker()
  const [theme, setTheme] = useState("dark");
  const isActive = UseMediaQuery('(min-width: 992px')
  const [showNav, setShowNav] = useState(false)
  const [navFoot, setNavFoot] = useState("")


  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  function navFooterHandler() {
   if (isActive) {
      return (
        <>
        <NavBar className="hide" />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/">
            <Landing/>
          </Route>
        </Switch>
        <Footer className="hide"/>
        </>
      )
   }
  }

  // useEffect(()=> {
  //   navFooterHandler()
  // },[])

  console.log(isActive);

  return (
    <div className={`App ${theme}`}>
      <div className="app-container">

       
        
       {showNav && <NavBar />}
       <NavBar  />
        <Switch>
          {isActive ? <Route exact path="/" render ={(props) => <Landing {...props} setShowNav={setShowNav(false)} />} /> :
          <Route path="/home" render = {(props) => <Home {...props} setShowNav={setShowNav(true)} />} />}
          <Route path="/home" render = {(props) => <Home {...props} setShowNav={setShowNav(true)} />} />
          {/* <Route exact path="/" component={Landing} /> */}
          <Route path="/home" component={Home}/>
          <Route path="/portfolioscreen" component={PortfolioScreen} />
          <Route path="/singleportfolio/:slug" component={SinglePortfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <span className="footer">
         {showNav &&  <Footer themeHandler={themeHandler} />}
         {/* <Footer themeHandler={themeHandler}  /> */}
        </span>
      </div>
    </div>
  );
}

export default App;
