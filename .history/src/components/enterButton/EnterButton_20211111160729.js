import Button from '../../assets/images/bg_button1.png'
import styles from './EnterButton.module.css'
import { Link } from 'react-router-dom'

export default function EnterButton() {

    return (
        <div className={styles.buttonWrapper} >
            <Link to="/">
            <img src={Button} alt="button" className={styles.button}/> </Link>
        </div>
    )
}