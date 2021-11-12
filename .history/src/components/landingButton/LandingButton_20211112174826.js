import styles from "./LandingButton.module.css";
import { Link } from "react-router-dom";

export default function LandingButton() {
  return (
    <div className={styles.wrapper}>
         <Link to="/home">
         
      <div className={styles.buttonWrapper}>
      <div className={styles.hover}></div>
        <div className={styles.glass}></div>
        <div className={styles.topBackgroundBlack}></div>
        <div className={styles.topBackgroundPink}></div>
        <div className={styles.top}>
          <p className={styles.text}>
            j <span className={styles.reverse}>j</span>
          </p>
        </div>
        <div className={styles.buttonAround}></div>
        <div className={styles.foot}></div>
      </div>
      </Link>
      <div className={styles.buttonShadow}></div>
      
    </div>
  );
}
