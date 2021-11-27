import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioScreen.module.css";
import stringToSlug from "../../helpers/stringToSlug";
import { PortfolioContext } from '../../context/PortfolioContext'


function PortfolioScreen() {
  const { portData } = useContext(PortfolioContext)
  const [filteredPort, setFilteredPort] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);

 
useEffect(()=>{
  setFilteredPort(portData)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  function nextScreenHandler() {
    setStart(start + 9);
    setEnd(end + 9);
  }
  function prevScreenHandler() {
    setStart(start - 9);
    setEnd(end - 9);
  }

  function handeClickAll() {
    setFilteredPort(portData);
  }

  const portWordpress = portData.filter((port) => {
    return port.category.wordpress;
  });

  // const portJavascript = portData.filter((port) => {
  //   return port.category.javascript;
  // });

  const portReact = portData.filter((port) => {
    return port.category.react;
  });

  // const portReactNative = portData.filter((port) => {
  //   return port.category.reactNative;
  // });

  const portPHP = portData.filter((port) => {
    return port.category.PHP;
  });
  const portLogo = portData.filter((port) => {
    return port.category.logo;
  });

  const portCss = portData.filter((port) => {
    return port.category.css;
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

  // function handleClickJavascript() {
  //   if (portJavascript) {
  //     setFilteredPort(portJavascript);
  //   }
  // }

  // function handleClickReactNative() {
  //   if (portReactNative) {
  //     setFilteredPort(portReactNative);
  //   }
  // }

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

  function handleClickCss() {
    if (portCss) {
      setFilteredPort(portCss);
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
        {/* <button
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
        </button> */}
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
          value="logo"
          onClick={handleClickLogo}
        >
          Logo
        </button>

        <button
          type="button"
          className={styles["cat-button"]}
          value="css"
          onClick={handleClickCss}
        >
          CSS
        </button>
      </div>

      <div className={styles["port-wrapper"]}>
        {filteredPort && filteredPort.slice(start, end).map((singlePort) => (
          <div className={styles["port-comp"]} key={singlePort.id}>
            <Link
              to={`/singleportfolio/${stringToSlug(singlePort.title)}`}
              
            >
              <div className={styles["image-box"]}>
               {singlePort.image ? <img
                  src={singlePort.image}
                  alt="portfolio"
                  className={styles["port-img"]}
                /> :
                <div className={styles.flame}><singlePort.code  /></div>}
              </div>

              <p>{singlePort.title}</p>
              {/* <Single
        singlePort={singlePort}
        /> */}
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
          disabled={filteredPort && filteredPort.length <= end}
          onClick={nextScreenHandler}
        >
          →
        </button>
      </div>
    </div>
  );
}
export default PortfolioScreen;