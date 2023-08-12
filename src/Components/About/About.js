import React from "react";

import styles from "./About.module.css";

import me from "../../imgs/me.webp";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutContent}>
        <img src={me} alt="Chadwick Strong" width="250px" />
        <div>
          <h3>About Me</h3>
          <p>
            I am a results-driven full-stack developer with over eight years of
            experience in the industry. I excel in crafting innovative and
            user-friendly digital solutions that seamlessly integrate front and
            back-end technologies. I am well-versed in HTML5, CSS3, JavaScript,
            PHP, MySQL and React.js. I love all things technology and I am
            always trying to learn more and more about it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
