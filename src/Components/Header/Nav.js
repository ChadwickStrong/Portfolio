import React from "react";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>CHADWICK M. STRONG</h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#portfolio").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Portfolio
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#about").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
