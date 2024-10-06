import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohith</h1>
        <p className={styles.description}>
            I'm a full-stack developer with 2 years of experience using React and 
            NodeJS. Reach out if you'd like to learn more about me!
            </p>
            <a href="mailto: hl5442@wayne.edu" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={StyleSheet.topBlur} />
        <div className={StyleSheet.bottomBlur} />
  </section> 
  );
};
