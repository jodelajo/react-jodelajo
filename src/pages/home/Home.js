import React from "react";
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header"

function Home() {
  return (
    <>
      <div className={styles["home-wrapper"]}>
        <Header/>
        <div className={styles["main"]}>
          <p>Welkom bij jodelajo! <br/>
          
            Ik ben 
             Frontend Developer.
            Ik maak <Link to="/portfolioScreen" className={styles["accent"]}> websites </Link> en <span className={styles["accent"]}>webapplicaties</span> gebruikmakend van de laatste
            <span className={styles["accent"]}> Javascript</span> syntax,
            <span className={styles["accent"]}> React</span>,{" "}
            <span className={styles["accent"]}> ReactNative</span>, maar ook{" "}
            <span className={styles["accent"]}>Wordpress</span>.
          
            Ook heb ik mijn certificaten behaald voor 
            <span className={styles["accent"]}> Photoshop</span>,{" "}
            <span className={styles["accent"]}>Illustrator</span> en{" "}
            <span className={styles["accent"]}>InDesign</span>.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
