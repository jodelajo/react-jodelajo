import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo300x300.png";

function NavBar() {
  const [checked, setChecked] = useState(false);

  // function handleClick() {
  //   setChecked(!checked);
  // }

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-name-wrapper"]}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles["logo"]} />
        </Link>
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

      {checked && <div className="nav-wrapper">
        <div id="menu-web">
          <Link to="/" className="menuClass">
            Home
          </Link>
          <Link to="/portfolioScreen" className="menuClass">
            Portfolio
          </Link>
          <Link to="/about" className="menuClass">
            Over jodelajo
          </Link>
          <Link to="/contact" className="menuClass">
            Contact
          </Link>
        </div>
      </div>}
    </div>
  );
}
export default NavBar;
