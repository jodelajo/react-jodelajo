import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const nameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [succesMessage, setSuccesMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setSuccesMessage(false);

    emailjs
      .sendForm(
        "service_cwhabxh",
        "template_h70skio",
        e.target,
        "user_SIUc361GpWWJQ3v3gY7Ph"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccesMessage(true);
  }

  return (
    <div className={styles["contact-container"]}>
      <h1>Contactformulier</h1>
      <form onSubmit={sendEmail} className={styles["form"]}>
        <input
          type="text"
          name="name"
          placeholder="Uw naam"
          className={styles["input"]}
          ref={nameRef}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Onderwerp"
          className={styles["input"]}
          ref={subjectRef}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email-adres"
          className={styles["input"]}
          ref={emailRef}
          required
        />

        <textarea
          name="message"
          placeholder="Uw bericht"
          className={styles["input-textarea"]}
          rows="4"
          ref={messageRef}
          required
        />

        <input
          type="submit"
          value="Verzenden"
          className={styles["submit-send"]}
        />
        {succesMessage && <p>Uw bericht is succesvol verzonden!</p>}
      </form>
      <div className={styles["info-container"]}>
        <p className={styles["contact-icons"]}>
          <a href="mail.to:jodelajo@gmail.com">
            <FaEnvelope className={styles.mail} />
          </a>
        </p>
        <p className={styles["contact-icons"]}>
          <a
            href="https://www.linkedin.com/in/joanneke-haasbroek-77b31020/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </p>
        <p className={styles["contact-icons"]}>
          <a
            href="https://github.com/jodelajo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </div>
  );
}
export default Contact;
