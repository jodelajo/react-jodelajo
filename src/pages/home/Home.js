import React from "react";
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className={styles["home-wrapper"]}>
      <h1>Design <span className={styles['and']}>&</span>& Coding</h1>
        <div className={styles["main"]}>
          <p>Welkom bij jodelajo! <br/>
          
            Ik ben 
             Frontend Developer.
            Ik maak <Link to="/portfolioScreen" className={styles["accent"]}> websites </Link> en <span className={styles["accent"]}>webapplicaties</span> gebruikmakend van de laatste
            <Link to="/portfolioScreen" className={styles["accent"]}> Javascript</Link> syntax,
            <Link to="/portfolioScreen" className={styles["accent"]}> React</Link>,{" "}
            <Link to="/portfolioScreen" className={styles["accent"]}> ReactNative</Link>, maar ook{" "}
            <Link to="/portfolioScreen" className={styles["accent"]}>Wordpress</Link>.
          
            Ook heb ik mijn certificaten behaald voor 
            <Link to="/portfolioScreen" className={styles["accent"]}> Photoshop</Link>,{" "}
            <Link to="/portfolioScreen" className={styles["accent"]}>Illustrator</Link> en{" "}
            <Link to="/portfolioScreen" className={styles["accent"]}>InDesign</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
