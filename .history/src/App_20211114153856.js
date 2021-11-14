import React, {  useState } from "react";
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
import UseMediaQuery from "./components/UseMediaQuery"
import useGaTracker from "./components/useGaTracker";

function App() {
  useGaTracker()
  const [theme, setTheme] = useState("dark");
  const isActive = UseMediaQuery('(min-width: 992px')
  const history = useHistory();
  let slug = history.location.pathname


  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  

  console.log(isActive);
  console.log(slug);
  console.log(history);

  return (
    <div className={`App ${theme}`}>
      <div className="app-container">

        { slug !== '/' &&  <NavBar/>}
       
       
        <Switch>
          {/* {isActive ? <Route exact path="/" component={Landing} />:
        <Route path="/home" component={Home} />  
        } */}

        {!isActive && <>
        <Switch>
        <Redirect from="/" to="/home" />
        <Route path="home" component={Home} />
        </Switch>
        </>
        }

           <Route exact path="/" component={Landing}/>
           <Route path="/home" component={Home}/>
          <Route path="/portfolioscreen" component={PortfolioScreen} />
          <Route path="/singleportfolio/:slug" component={SinglePortfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <span className="footer">
          { slug !== "/" &&  <Footer themeHandler={themeHandler}/>}
       
       
        </span>
      </div>
    </div>
  );
}

export default App;
