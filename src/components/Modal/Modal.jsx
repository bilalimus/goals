import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};

const ModalOverly = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h3>Modal Title</h3>
      </div>
      <div>
        <button>CLOSE</button>
        <button>ORDER</button>
      </div>
    </div>
  );
};

function Modal(props) {
  const portalElement = document.getElementById("overlay");

  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverly />, portalElement)}
    </>
  );
}

export default Modal;
