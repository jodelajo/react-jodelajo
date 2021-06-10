import React from 'react'
import styles from './Footer.module.css'
import { IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";

function Footer() {
    const day = new Date()
    const year = day.getFullYear()


    return <div className={styles['footer-container']}> 
         <div className={styles["info-container"]}>
        <p className={styles["contact-text"]}>GirlPowered by: jodelajo {year}</p>
        <p className={styles["contact-icons"]}><a href="mail.to:jodelajo@gmail.com"><IoMail /></a></p>
        <p className={styles["contact-icons"]}><a href="https://www.linkedin.com/in/joanneke-haasbroek-77b31020/" target="_blank" rel="noreferrer"><IoLogoLinkedin /></a></p>
        <p className={styles["contact-icons"]}><a href="https://github.com/jodelajo"target="_blank" rel="noreferrer"><IoLogoGithub/></a></p>
        </div>
    
    </div>
}
export default Footer