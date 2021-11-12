import styles from "./LandingButton.module.css";
import { Link } from "react-router-dom";

export default function LandingButton() {
  return (
    <div class={styles.wrapper}>
      <div class={styles.buttonWrapper}>
      <Link to="/home">
        <div class={styles.glass}></div>
        <div class={styles.topBackgroundBlack}></div>
        <div class={styles.topBackgroundPink}></div>
        <div class={styles.top}>
          <p class={styles.text}>
            j <span class={styles.reverse}>j</span>
          </p>
        </div>
        <div class={styles.buttonAround}></div>
        </Link>
      </div>
      <div class={styles.buttonShadow}></div>
    </div>
  );
}
