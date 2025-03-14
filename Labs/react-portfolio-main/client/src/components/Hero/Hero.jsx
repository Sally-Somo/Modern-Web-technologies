import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sally</h1>
        <p className={styles.description}>
          I'm a data analyst with 5 years of experience using Python, SQL and 
         PowerBi. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sallysomo74@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="./Portofolio Selfie.jpg" /* Replaced heroImage with your own image */
        alt="Hero image of Sally"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
