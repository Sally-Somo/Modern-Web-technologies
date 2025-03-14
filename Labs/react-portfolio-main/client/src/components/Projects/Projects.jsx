import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then(setProjects)
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      {projects.length > 0 ? (
        <div className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      ) : (
        <p className={styles.errorMessage}>No projects found. Check your `projects.json` file.</p>
      )}
    </section>
  );
};
