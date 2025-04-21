import React from 'react';
import styles from './modal.module.css'; 

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
        
      <div className={styles.modal}>
      <button className={styles.closeBtn} onClick={onClose}>x</button>
        {children}
      </div>
      </div>
   
  );
};

export default Modal;
