import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../Hero/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakthi</h1>
        <p className={styles.description}>I'm a Full-Stack developer.</p>
        <div className={styles.buttons}>
          <a href="mailto:sv69811@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1oCiTiXpBa8iHpit_oqGX-yMiZRC3zvBk/view?usp=drive_link"
            target="_blank"
            className={styles.MyResumeBtn}
          >
            My Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/Hero.jpg")}
        alt="Hero-img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
