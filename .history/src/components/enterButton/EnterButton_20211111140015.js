import Button from '../../assets/images/bg_button1.png'
import styles from './EnterButton.module.css'

export default function EnterButton() {

    return (
        <div className={styles.buttonWrapper} >
            <a href="https://jodelajo.nl/" >
            <img src={Button} alt="button" className={styles.button}/> </a>
        </div>
    )
}