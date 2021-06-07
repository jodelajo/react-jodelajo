import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import NavBar from "./components/navBar/NavBar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import PortfolioScreen from "./pages/portfolioScreen/PortfolioScreen"
import SinglePortfolio from "./components/singlePortfolio/SinglePortfolio"

function App() {
  return <div className="app-container">
    <NavBar/>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolioscreen" component={PortfolioScreen} />
      <Route path="/singleportfolio/:slug" component={SinglePortfolio} />
    </Switch>
   
    <Footer />
    </div>;
}

export default App;
