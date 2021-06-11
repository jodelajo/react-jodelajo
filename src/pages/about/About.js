import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <h1>Over mij</h1>

      <p>
        Mijn naam is Joanneke Haasbroek en ik ben junior Frontend Developer. 
      </p>
      <p>
        In 2019 heb ik het roer omgegooid en de sprong in het diepe gewaagd. Na jaren te hebben gewerkt als zelfstandig projectmedewerker bij een maatschappelijke stichting, was ik niet meer gelukkig in mijn werk. 
      </p>
      <ul>
        mijn eigenschappen:
        <li>Ideeen mens</li>
        <li>denken in oplossingen</li>
        <li>sociaal</li>
        <li>extravert!!!</li>
        <li>intrinsiek gemotiveerd</li>
      </ul>
      <ul>Slecht in:
          <li>
discipline
          </li>
          <li>
            theoretische stof uit boeken leren
          </li>
          
      </ul>

      <p>
          Geen HBO-diploma, nee, nein, njet. Wel 10 jaar ervaring op functie met HBO-profiel.
      </p>
    </div>
  );
}
export default About;
