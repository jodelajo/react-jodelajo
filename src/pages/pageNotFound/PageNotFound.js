import React from "react";
import styles from "./PageNotFound.module.css";
import NeonNotFound from "../../components/neonNotFound/NeonNotFound";
import LandingButton from "../../components/landingButton/LandingButton";

export default function PageNotFound() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.inner}>
        <div className={styles.notFound}>
        <NeonNotFound />
        </div>
      <div className={styles.button}>
        <LandingButton />
      </div>
        </div>
       
    </div>
  );
}
