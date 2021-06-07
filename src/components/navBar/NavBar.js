import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo300x300.png";

function NavBar() {
  const [checked, setChecked] = useState(false);

  // function handleClick() {
  //     setChecked(!checked)
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
      {/* {checked && <div id="menu">
            <Link to="/" className="menuClass" onClick={handleClick}>Home</Link>
            <Link to="/profile" className="menuClass" onClick={handleClick}>Instellingen</Link>
            <Link to="contact" className="menuClass" onClick={handleClick}>Contact</Link>
        </div>}

        <div className="nav-wrapper">
            
            {!checked && <div id="menu-web">
                <Link to="/" className="menuClass">Home</Link>
                <Link to="/profile" className="menuClass">Instellingen</Link>
                <Link to="/contact" className="menuClass">Contact</Link>
            </div>} */}
      {/* </div> */}
    </div>
  );
}
export default NavBar;
