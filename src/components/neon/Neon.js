import React from "react";
import styles from "./Neon.module.css";

export default function Neon({ text }) {

console.log('text', text);
  return (
    <div className={styles.neonWrapper}>
      {text === "jodelajo" ? (
        <>
          <div>j</div>
          <div className={styles.o}>o</div>
          <div>d</div>
          <div>e</div>
          <div className={styles.l}>l</div>
          <div>a</div>
          <div className={styles.j2}>j</div>
          <div>o</div>
        </>
      ) : (
        <>
          <div>4</div>
          <div className={styles.o}>0</div>
          <div className={styles.j2}>4</div>
        </>
      )}
    </div>
  );
}
