import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-wrapper"]}>
        <div className={styles["main"]}>
          Welkom bij Jodelajo! Ik maak websites en webapplicaties gebruikmakend van de laatste 
          <span className={styles["red"]}> Javascript</span> syntax, 
          <span className={styles["red"]}> React</span>, <span className={styles["red"]}> ReactNative</span>, maar ook <span className={styles["red"]}>Wordpress</span>. Ook heb ik mijn certificaten behaald voor <span className={styles["red"]}>Photoshop</span>, <span className={styles["red"]}>Illustrator</span> en <span className={styles["red"]}>InDesign</span>.
        </div>
        
      </div>
      <div className={styles["portfolio-container"]}>
            portfolio
        </div>
    </div>
  );
}
export default Home;
