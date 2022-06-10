import React from "react";
import { CloseRound } from "../icons";
import styles from "./Modal.module.css";

const Modal = ({ children, handleClose }) => {
  return (
    <div className={`${styles.modal_wrap}`}>
      <div className={`d-flex align-center ${styles.modal_container}`}>
        <div className={styles.modal_inner}>
          <button
            className={`btn d-flex align-center justify-center ${styles.btn_modal_close}`}
            onClick={handleClose}
          >
            <CloseRound className={styles.close_icon} />
          </button>
          <div className={styles.modal_content}>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
