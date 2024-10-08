import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <br />
              <p>
              I'm a Frontend Developer with extensive experience in building responsive, optimized, and user-friendly websites. 
              My expertise lies in creating dynamic and visually appealing UIs that enhance user experiences using technologies 
              like React, JavaScript, HTML, and CSS. I’m proficient in ensuring cross-browser compatibility and mobile responsiveness, 
              making sure the design scales across various devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <br />
              <p>
              I have a strong background in backend development, with a focus on building efficient, secure, and scalable systems. 
              I specialize in Node.js, Python, SQL, and API development to ensure robust server-side architecture. 
              My backend expertise involves database management, performance optimization, and API integration to handle complex 
              data operations and interactions seamlessly.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <br />
              <p>
              As a UI/UX designer, I’ve designed multiple user-centric landing pages and comprehensive design systems. 
              My designs prioritize usability, clarity, and visual coherence, ensuring that users have an intuitive and enjoyable experience. 
              With experience in Figma, Adobe XD, and other design tools, I create modern interfaces that align with the latest design trends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};