import React, { useState } from "react";

import Modal from "./Modal";

import styles from "./Portfolio.module.css";

const Portfolio = (props) => {
  const [itemClicked, isItemClicked] = useState(false);
  const [modalDetails, isModalDetails] = useState({});
  const openModal = (item) => {
    isModalDetails(item);
    isItemClicked(true);
  };

  const closeHandler = () => {
    isModalDetails({});
    isItemClicked(false);
  };

  return (
    <>
      {itemClicked && <Modal details={modalDetails} onConfirm={closeHandler}/> }
      <div className={styles.portfolio} id="portfolio">
        <h3>Portfolio</h3>
        <p>Select a project to learn more!</p>
        <div className={styles.portfolioItems}>
          {props.items.map((item) => {
            return (
              <div className={styles.portfolioItem} key={item.id}>
                <img
                  src={item.croppedUrl}
                  alt={item.altDesc}
                  onClick={(event) => (openModal(item))}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
