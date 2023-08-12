import React from "react";
import "boxicons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Made with ♥ in React</p>
      <div className={styles.social}>
        <a
          href="http://www.linkedin.com/in/chadwickmstrong"
          target="_blank"
          rel="noreferrer"
        >
          <box-icon type="logo" name="linkedin" color="#ffffff"></box-icon>
        </a>
        <a
          href="https://github.com/ChadwickStrong"
          target="_blank"
          rel="noreferrer"
        >
          <box-icon name="github" type="logo" color="#ffffff"></box-icon>
        </a>
      </div>
    </div>
  );
};

export default Footer;
