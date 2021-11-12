import styles from './LandingButton.module.css'

export default function LandingButton() {
    return (
        <div class={styles.wrapper}>
        
        <div class={styles.buttonWrapper}>
            <div class={styles.glass}></div>
            <div class={styles.topBackgroundBlack}> 
                
            </div> 
            <div class={styles.topBackgroundPink}> 
                
            </div>
            <div class={styles.top}><p class={styles.text}>j <span class={styles.reverse}>j</span></p></div>
            <div class={styles.buttonAround}></div>
            <div class={styles.buttonShadow}></div>
        </div>
       
    </div>
    );
}