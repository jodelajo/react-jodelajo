import Button from '../../assets/images/bg_button5.png'
import styles from './EnterButton.module.css'
import { Link } from 'react-router-dom'

export default function EnterButton() {

    return (
        <div className={styles.buttonWrapper} >
            <Link to="/home">
            <img src={Button} alt="button" className={styles.button}/> </Link>
        </div>
    )
}