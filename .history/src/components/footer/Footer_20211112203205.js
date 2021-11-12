import React from "react";
import styles from "./Footer.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import ThemeButton from "../themeButton/ThemeButton";
import Neon from "../neon/Neon";

function Footer({ themeHandler }) {
  const day = new Date();
  const year = day.getFullYear();

  return (
    <div className={styles["footer-container"]}>
      <div className={styles.buttonContainer}>
        <ThemeButton onClick={themeHandler} />
      </div>
     
      <div className={styles["info-container"]}>
        <p className={styles["contact-text"]}>
          GirlPowered by: 
          <div className={styles.neon}>
        <Neon />
      </div>
           {year}
        </p>
        <div className={styles.icons}>
          <span className={styles["contact-icons"]}>
            <a href="mail.to:jodelajo@gmail.com">
              <IoMail className={styles.mail} />
            </a>
          </span>
          <span className={styles["contact-icons"]}>
            <a
              href="https://www.linkedin.com/in/joanneke-haasbroek-77b31020/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin />
            </a>
          </span>
          <span className={styles["contact-icons"]}>
            <a
              href="https://github.com/jodelajo"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
