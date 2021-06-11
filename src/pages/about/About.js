import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <h1>Aangenaam,</h1>

      <p>
        Mijn naam is Joanneke Haasbroek en ik ben Frontend Developer. 
      </p>
      <p>
        In 2019 heb ik het roer omgegooid en de sprong in het diepe gewaagd en een carriere-switch gemaakt. </p>
        <p>Na jaren te hebben gewerkt als zelfstandig projectmedewerker bij een maatschappelijke stichting, was ik niet meer gelukkig in mijn werk. 
      </p>
      
   

      <p>
          Geen HBO-diploma, nee, nein, njet. Wel 10 jaar ervaring op functie met HBO-profiel.
      </p>
    </div>
  );
}
export default About;
