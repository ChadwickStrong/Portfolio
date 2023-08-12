import React from "react";
import "boxicons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Made with ♥ in React.js</p>
      <a
        href="http://www.linkedin.com/in/chadwickmstrong"
        target="_blank"
        rel="noreferrer"
      >
        <box-icon type="logo" name="linkedin" color="#ffffff"></box-icon>
      </a>
    </div>
  );
};

export default Footer;
