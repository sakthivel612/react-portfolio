import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutme.jpg")}
          alt="aboutme-img"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutList}>
            <img
              src={getImageUrl("about/cursoricon.png")}
              alt="cursor-icon-img"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a passionate fresher with a keen interest in frontend
                development, I am eager to leverage my skills in HTML, CSS, and
                JavaScript to contribute effectively to dynamic web projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutList}>
            <img
              src={getImageUrl("about/servericon.png")}
              alt="server-icon-img"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                As a fresher, I'm enthusiastic about diving into backend
                development to build robust and scalable solutions
              </p>
            </div>
          </li>
          <li className={styles.aboutList}>
            <img
              src={getImageUrl("about/databaseicon.png")}
              alt="database-icon-img"
            />
            <div className={styles.aboutItemText}>
              <h3>Database</h3>
              <p>
                As a fresher, I'm seeking opportunities to apply my database
                development skills to contribute effectively to projects and
                learn from experienced professionals.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
