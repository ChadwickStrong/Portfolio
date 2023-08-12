import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p className={styles.exitButton} onClick={props.onConfirm}>
          X
        </p>
        <div className={styles.leftContent}>
          <img src={props.imgUrl} alt={props.altDesc} />
        </div>
        <div className={styles.rightContent}>
          <h3>{props.title}</h3>
          <div>{props.description.map((item) => {
            return item;
          })}</div>
          <a href={props.link} target="_blank" rel="noreferrer">
            Check out the full project!
          </a>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.details.title}
          description={props.details.description}
          altDesc={props.details.altDesc}
          link={props.details.link}
          imgUrl={props.details.imgUrl}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
