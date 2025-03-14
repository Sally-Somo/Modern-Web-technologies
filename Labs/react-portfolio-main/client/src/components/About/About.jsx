import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { fetchEducation, fetchOverview } from "../../api";

export const About = () => {
  const [overview, setOverview] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetchOverview().then((data) => setOverview(data.overview)); // Fetch overview as an array
    fetchEducation().then(setEducation);
  }, []);

  return (
    <section className={styles.container} id="overview">
      {/* Centered Overview Heading */}
      <h2 className={`${styles.title} ${styles.centeredTitle}`}>Overview</h2>

      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              {overview.map((line, index) => (
                <p key={index}>{line}</p> // Renders each line separately
              ))}
            </div>
          </li>
        </ul>

        {/* Education Section */}
        <h2 className={`${styles.title} ${styles.centeredTitle}`}>Education</h2>
        <ul className={styles.aboutItems}>
          {education.map((edu, index) => (
            <li key={index} className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>{edu.school}</h3>
                <p>
                  {edu.degree} ({edu.year})
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
