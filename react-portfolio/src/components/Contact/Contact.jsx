import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rohithsuresh@wayne.edu">rohithsuresh@wayne.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rohithkoushal/">linkedin.com/rohithsuresh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/rohithl5442">github.com/rohithsuresh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/icon1.png")} alt="Phone icon" />
          <a href={`tel:+12489932191`}>(248)-993-2191</a>
        </li>
      </ul>
    </footer>
  );
};