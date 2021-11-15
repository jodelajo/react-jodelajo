import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo300x300.png";
import UseMediaQuery from "../UseMediaQuery";

function NavBar() {
  const [checked, setChecked] = useState(false);
  const isActive = UseMediaQuery("(min-width: 992px)");

  function handleClick() {
    setChecked(!checked);
  }

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-name-wrapper"]}>
        {isActive ? <Link to="/">
          <img src={logo} alt="logo" className={styles["logo"]} />
        </Link>
      :
      <Link to="/home">
      <img src={logo} alt="logo" className={styles["logo"]} />
    </Link>
      }
        <h2>
          jodelajo<span className={styles["dot"]}>.</span>
        </h2>
      </div>

      <label htmlFor="hamburger" className={styles["hamburger-icon"]}>
        &#9776;
      </label>

      <input
        type="checkbox"
        className={styles["hamburger"]}
        id="hamburger"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />

      {checked && (
        <div className={styles["nav-wrapper"]}>
          <Link to="/home" className={styles["menuClass"]} onClick={handleClick}>
            Home
          </Link>
          <Link
            to="/portfolioScreen"
            className={styles["menuClass"]}
            onClick={handleClick}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className={styles["menuClass"]}
            onClick={handleClick}
          >
            Over jodelajo
          </Link>
          <Link
            to="/contact"
            className={styles["menuClass"]}
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>
      )}

      {!checked && (
        <div className={styles["nav-wrapper-web"]}>
          <Link to="/home" className={styles["menuClass"]}>
            Home
          </Link>
          <Link to="/portfolioScreen" className={styles["menuClass"]}>
            Portfolio
          </Link>
          <Link to="/about" className={styles["menuClass"]}>
            Over jodelajo
          </Link>
          <Link to="/contact" className={styles["menuClass"]}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
export default NavBar;
