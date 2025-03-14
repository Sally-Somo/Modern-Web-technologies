import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import { fetchExperience } from "../../api";

export const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetchExperience().then(setExperienceData);
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {experienceData.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.company}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.responsibilities.map((experience, index) => (
                    <li key={index}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
