import React from 'react';
import styles from "./ThemeButton.module.css";


function ThemeButton({ label, onClick}) {
   
    return (
        <button onClick={onClick} className={styles.button}>
            {label}
        </button>
    );
};
export default ThemeButton