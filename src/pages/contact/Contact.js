import React, { useState, useRef} from "react"
import styles from "./Contact.module.css"
import emailjs from "emailjs-com";



function Contact() {
    const nameRef = useRef()
    const subjectRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const [succesMessage, setSuccesMessage] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        setSuccesMessage(false)

        emailjs.sendForm('service_cwhabxh', 'template_h70skio', e.target, 'user_SIUc361GpWWJQ3v3gY7Ph')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setSuccesMessage(true)
    }

    return <div className={styles["contact-container"]}>
   

         <form onSubmit={sendEmail} className={styles["form"]}>
            <h2>Contactformulier</h2>
            <input
                type="text"
                name="name"
                placeholder="Uw naam"
                className={styles["input"]}
                ref={nameRef} required
            />
            <input
                type="text"
                name="subject"
                placeholder="Onderwerp"
                className={styles["input"]}
                ref={subjectRef} required
            />
            <input
                type="email"
                name="email"
                placeholder="Email-adres"
                className={styles["input"]}
                ref={emailRef} required
            />

            <textarea
                name="message"
                placeholder="Uw bericht"
                className={styles["input-textarea"]}
                rows="4"
                ref={messageRef} required
            />

            <input type="submit" value="Verzenden" className={styles["submit-send"]}/>
            {succesMessage && <p>Uw bericht is succesvol verzonden!</p>}
        </form>

        </div>
}
export default Contact