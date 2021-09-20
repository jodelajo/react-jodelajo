import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles["about-container"]}>
      <h1>Aangenaam,</h1>
      <div className={styles.aboutWrapper}>
        <p>
          Mijn naam is <span className={styles.accent}>Joanneke Haasbroek</span>{" "}
          en ik ben <span className={styles.accent}>Frontend Developer</span>.
          In 2019 heb ik het roer omgegooid en de sprong in het diepe gewaagd en
          een carriere-switch gemaakt.{" "}
        </p>

        <h3>
          Design <span className={styles.red}>&</span>& Coding
        </h3>
        <p>
          Het afgelopen jaar heb ik mij volledig toegelegd op het ontwikkelen
          van skills en kennis op het gebied van{" "}
          <span className={styles.accent}>
            Frontend Development en vormgeving
          </span>
          . Ik heb voor voor{" "}
          <span className={styles.accent}>Adobe Photoshop</span>,{" "}
          <span className={styles.accent}>Illustrator</span> en{" "}
          <span className={styles.accent}>InDesign</span> mijn{" "}
          <span className={styles.accent}>MBO-certificaten</span> behaald en
          de bootcamp opleiding <span className={styles.accent}>Frontend Development</span>{" "}
          aan de <span className={styles.accent}>Novi Hogeschool</span> in
          Utrecht onlangs succesvol afgerond. Tijdens deze opleiding heb ik mij bekwaamd in de meeste
          recente versies van <span className={styles.accent}>HTML/CSS</span>,{" "}
          <span className={styles.accent}>Javascript</span> en{" "}
          <span className={styles.accent}>React</span>.
        </p>

        <p>
          Ik vind het{" "}
          <span className={styles.accent}>snijvlak van design en coderen</span>{" "}
          het allerleukst. <span className={styles.accent}>Pixelperfect</span>{" "}
          en <span className={styles.accent}>gebruikersvriendelijk</span> met
          een <span className={styles.accent}>karaktervolle uitstraling</span>.
        </p>

        <p>
          Na ruim 10 jaar te hebben gewerkt als{" "}
          <span className={styles.accent}>adviseur</span> bij een{" "}
          <span className={styles.accent}>maatschappelijke stichting</span>, was
          ik niet meer gelukkig in mijn werk. Ik had al een opleiding Webdesign
          afgerond in 2009 waar ik veel plezier aan had beleefd. Ook werk ik al
          ruim 20 jaar met Photoshop.{" "}
        </p>
        <p>
          Spreekt dit je aan? Dan kun je altijd{" "}
          <Link to="/contact" className={styles.accentLink}>
            contact
          </Link>{" "}
          opnemen voor een{" "}
          <span className={styles.accent}>nadere kennismaking</span>.
        </p>
      </div>
    </div>
  );
}
export default About;
