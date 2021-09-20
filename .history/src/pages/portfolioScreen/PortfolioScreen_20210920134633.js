import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioScreen.module.css";
import portfolioData from "../../data/portfolio.json";

function PortfolioScreen() {
  const [filteredPort, setFilteredPort] = useState(portfolioData);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  

function nextScreenHandler() {
  setStart(start + 9);
  setEnd(end + 9);
}
function prevScreenHandler() {
  setStart(start - 9);
  setEnd(end - 9);
}

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

  const portPHP = portfolioData.filter((port) => {
    return port.category.PHP;
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
  function handleClickPHP() {
    if (portPHP) {
      setFilteredPort(portPHP);
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
          value="php"
          onClick={handleClickPHP}
        >
         PHP
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


        {filteredPort.slice(start, end).map((singlePort) => (
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
            disabled={start < 1}
            onClick={prevScreenHandler}
          >
            ←
          </button>
          <button
            className={styles["arrow-button"]}
            type="button"
            disabled={end >= filteredPort.length}
            onClick={nextScreenHandler}
          >
            →
          </button>
        </div>

    </div>
  );
}
export default PortfolioScreen;
