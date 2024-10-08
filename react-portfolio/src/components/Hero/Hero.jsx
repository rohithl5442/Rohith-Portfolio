import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohith Suresh</h1>
        <p className={styles.description}>
        Welcome to my personal portfolio! 
        <br />
        <br />
        I am an Aspiring Data Scientist and Full-Stack Developer with hands-on experience in designing and building scalable, 
        secure web applications and software solutions. With a solid foundation in Data Science, Software Development, and Project Management, 
        I have honed my skills in Python, SQL, Java, C, C++, and full-stack development using React, Node.js, and JavaScript.
        <br />
        <br />
        I have successfully led multiple projects, ranging from front-end web development to back-end API management, with notable contributions to 
        the U.S. Department of Defense and other key initiatives. These experiences have equipped me with the technical expertise to build robust, 
        secure systems and deliver data-driven solutions.
        <br />
        <br />
        I am passionate about applying Data Science methodologies to solve real-world challenges, and I thrive on using data to drive meaningful insights 
        and impactful decisions. Currently, I am in my senior year, graduating with a Bachelor of Science in Computer Science from Wayne State University 
        this December 2024. I am actively seeking opportunities to leverage my skills in Data Science and Software Development to contribute to impactful projects.

            </p>
            <a href="mailto: hl5442@wayne.edu" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={StyleSheet.topBlur} />
        <div className={StyleSheet.bottomBlur} />
  </section> 
  );
};
