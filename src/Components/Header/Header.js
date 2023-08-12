import React from "react";

import Nav from "./Nav";

import circleLogo from '../../imgs/circlelogo.png'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Nav />
      <div className={styles.hero}>
        <img src={circleLogo} alt="Icon with the letters C and S in a circle"/>
        <h2>CHADWICK M. STRONG</h2>
        <p>Full-Stack Developer</p>
      </div>
    </div>
  );
};

export default Header;
