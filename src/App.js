import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header";

function App() {
  return <div className="app-container">
    <NavBar/>
    <Header/>
    <Home />
    <Footer />
    </div>;
}

export default App;
