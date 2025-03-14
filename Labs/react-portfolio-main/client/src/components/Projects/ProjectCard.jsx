import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, githubLink } }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}

      {/* GitHub Link */}
      <div className={styles.links}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
          View on GitHub
        </a>
      </div>
    </div>
  );
};
