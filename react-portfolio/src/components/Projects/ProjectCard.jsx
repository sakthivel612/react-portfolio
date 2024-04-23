import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    deployee,
    FrontEnd,
    BackEnd,
  },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Iamge of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={deployee} className={styles.link} target="_blank">
          Deployee
        </a>
        <a href={FrontEnd} className={styles.link} target="_blank">
          FrontEnd
        </a>
        <a href={BackEnd} className={styles.link} target="_blank">
          BackEnd
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
