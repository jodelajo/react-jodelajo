import React from "react";
import styles from "./Flame.module.css";

export default function Flame() {
  return (
    <div className={styles.container}>
      <div className={styles.sparkles}>
        <div className={styles.spark1}></div>
        <div className={styles.spark2}></div>
        <div className={styles.spark3}></div>
      </div>
      <div className={styles.flame}>
        <div className={styles.red}></div>
        <div className={styles.orange}></div>
        <div className={styles.yellow}></div>
      </div>
    </div>
  );
}
