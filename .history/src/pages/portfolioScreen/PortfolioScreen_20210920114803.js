import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioScreen.module.css";
import portfolioData from "../../data/portfolio.json";

function PortfolioScreen() {
  const [filteredPort, setFilteredPort] = useState(portfolioData);
  const [currentScreen, setCurrentScreen] = useState([0,9])

console.log(filteredPort);
console.log(currentScreen);

  function handeClickAll() {
    setFilteredPort(portfolioData);
  }

  const portWordpress = portfolioData.filter((port) => {
    return port.category.Wordpress;
  });

  const portJavascript = portfolioData.filter((port) => {
    return port.category.Javascript;
  });

  const portReact = portfolioData.filter((port) => {
    return port.category.React;
  });

  const portReactNative = portfolioData.filter((port) => {
    return port.category.ReactNative;
  });

  const portLogo = portfolioData.filter((port) => {
    return port.category.Logo;
  });

  const portHuisstijl = portfolioData.filter((port) => {
    return port.category.Huisstijl;
  });

  function handleClickWordpress() {
    if (portWordpress) {
      setFilteredPort(portWordpress);
    }
  }

  function handleClickReact() {
    if (portReact) {
      setFilteredPort(portReact);
    }
  }

  function handleClickJavascript() {
    if (portJavascript) {
      setFilteredPort(portJavascript);
    }
  }

  function handleClickReactNative() {
    if (portReactNative) {
      setFilteredPort(portReactNative);
    }
  }

  function handleClickLogo() {
    if (portLogo) {
      setFilteredPort(portLogo);
    }
  }

  function handleClickHuisstijl() {
    if (portHuisstijl) {
      setFilteredPort(portHuisstijl);
    }
  }

  return (
    <div className={styles["port-container"]}>
      <h1>Portfolio</h1>
      <div className={styles["port-buttons"]}>
        <button
          type="button"
          className={styles["cat-button"]}
          onClick={handeClickAll}
          value="all"
        >
          Alles
        </button>
        <button
          type="button"
          className={styles["cat-button"]}
          onClick={handleClickWordpress}
          value="wordpress"
        >
          Wordpress
        </button>
        <button
          type="button"
          className={styles["cat-button"]}
          value="react"
          onClick={handleClickReact}
        >
          React
        </button>
        <button
          type="button"
          className={styles["cat-button"]}
          value="javascript"
          onClick={handleClickJavascript}
        >
          Javascript
        </button>
        <button
          type="button"
          className={styles["cat-button"]}
          value="react-native"
          onClick={handleClickReactNative}
        >
          ReactNative
        </button>
        <button
          type="button"
          className={styles["cat-button"]}
          value="logo"
          onClick={handleClickLogo}
        >
          Logo
        </button>
        <button
          type="button"
          className={styles["cat-button"]}
          value="huisstijl"
          onClick={handleClickHuisstijl}
        >
          Huisstijl
        </button>
      </div>
      <div className={styles["port-wrapper"]}>


        {filteredPort.slice(currentScreen).map((singlePort) => (
          <div className={styles["port-wrappertje"]}
          key={singlePort.id}
          >
            <Link
              to={`/singleportfolio/${singlePort.id}`}
              className={styles["port-comp"]}
              
            >
              <div className={styles["image-box"]}>
                <img
                  src={singlePort.image}
                  alt="portfolio"
                  className={styles["port-img"]}
                />
              </div>

              <p>{singlePort.title}</p>
             
            </Link>
          </div>
        ))}
      </div>
      <div className={styles["web-buttons"]}>
          <button
            className={styles["arrow-button"]}
            type="button"
            // disabled={prevPort < 1}
            // onClick={prev}
          >
            ←
          </button>
          <button
            className={styles["arrow-button"]}
            type="button"
            // disabled={thisPort >= PortfolioData.length}
            // onClick={next}
          >
            →
          </button>
        </div>

    </div>
  );
}
export default PortfolioScreen;
