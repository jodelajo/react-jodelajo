import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import NavBar from "./components/navBar/NavBar"
import Home from "./pages/home/Home"
import PortfolioScreen from "./pages/portfolioScreen/PortfolioScreen"
import SinglePortfolio from "./components/singlePortfolio/SinglePortfolio"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"

function App() {
  return <div className="app-container">
    <NavBar/>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolioscreen" component={PortfolioScreen} />
      <Route path="/singleportfolio/:slug" component={SinglePortfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
   
  
    </div>;
}

export default App;
