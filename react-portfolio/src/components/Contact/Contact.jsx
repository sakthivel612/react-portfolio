import React from "react";
import { getImageUrl } from "../../utils";

import styles from "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sv69811@gmail.com">sv69811@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedInIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/sakthivel-k-0121bb245/"
            target="_blank"
          >
            LinkedIn.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sakthivel612" target="_blank">
            Github.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
