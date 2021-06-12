import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <h1>Aangenaam,</h1>

      <p>
        Mijn naam is Joanneke Haasbroek en ik ben <span className={styles.accent}>Frontend Developer</span>.
        In 2019 heb ik het roer omgegooid en de sprong in het diepe gewaagd en een carriere-switch gemaakt. </p>
        
        <h3>Design <span className={styles.red}>&</span>& Coding</h3>
        <p>Het afgelopen jaar heb ik mij volledig toegelegd op het ontwikkelen van skills en kennis op het gebied van Frontend Development en vormgeving. Ik heb voor voor <span className={styles.accent}>Adobe Photoshop</span>, <span className={styles.accent}>Illustrator</span> en <span className={styles.accent}>InDesign</span> mijn <span className={styles.accent}>MBO-certificaten</span> behaald en momenteel wacht ik op de uitslag van mijn eindopdracht van de opleiding <span className={styles.accent}>Frontend Development</span> aan de Novi Hogeschool in Utrecht.</p>

        <p>Ik vind het snijvlak van design en coderen het allerleukst. <span className={styles.accent}>Pixelperfect
        </span> en <span className={styles.accent}>gebruikersvriendelijk</span> met een <span className={styles.accent}>karaktervolle uitstraling</span>.</p>

        <p>Na jaren te hebben gewerkt als <span className={styles.accent}>zelfstandig projectmedewerker</span> bij een <span className={styles.accent}>maatschappelijke stichting</span>, was ik niet meer gelukkig in mijn werk. Ik had al een opleiding Webdesign afgerond in 2009 waar ik veel plezier aan had beleefd. Al ruim 20 jaar werk ik met Photoshop. </p>
        <p>Spreekt dit je aan? Dan kun je altijd contact opnemen voor een nadere kennismaking.</p>
   
    </div>
  );
}
export default About;
