import React, { useState} from 'react';
import styles from "./ThemeButton.module.css";


function ThemeButton({ onClick }) {
    const [checked, toggleChecked] = useState(false)

    function handleChecked() {
        onClick()
        toggleChecked(!checked)
    }
    return (<>
       
<div className={styles["switch-wrapper"]}>
        <input
            type="checkbox"
            className={styles["switch"]}
            id="switch"
            // name={label}
            onClick={handleChecked}
        />

        <label
            htmlFor="switch"
            className={styles["switch-btn"]}
        />
    </div>
</>
    );
};
export default ThemeButton