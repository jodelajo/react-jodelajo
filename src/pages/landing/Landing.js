import React from "react";
import styles from "./Landing.module.css";
import Neon from "../../components/neon/Neon";
import LandingButton from "../../components/landingButton/LandingButton";

export default function Landing({text}) {

  return (
    <main className={styles.landing}>
      <div className={styles.landingWrapper}>
        <div className={styles.neon}>
          <Neon text={text}/>
        </div>
        <div className={styles.landingButton}>
          <LandingButton />
        </div>
      </div>
    </main>
  );
}
