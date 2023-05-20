import React from "react";
import styles from "./Modal.module.css";

export const ModalContent = function modalContent() {
  return (
    <div className={styles.modalContent}>
      <div className={styles.walletInfo}>
        <div className={styles.walletName}>Rainbow</div>
        <img src="Rainbow.png" alt="Rainbow Wallet Image" />
        <button className={styles.selectButton}>
          <img src="arrow.png" alt="Arrow Image" />
        </button>
      </div>
      <div className={styles.walletInfo}>
        <div className={styles.walletName}>MetaMask</div>
        <img src="MetaMask.png" alt="MetaMask Wallet Image" />
        <button className={styles.selectButton}>
          <img src="arrow.png" alt="Arrow Image" />
        </button>
      </div>
      <div className={styles.walletInfo}>
        <div className={styles.walletName}>Gnosis Safe</div>
        <img src="Gnosis Safe.png" alt="Gnosis Safe Wallet Image" />
        <button className={styles.selectButton}>
          <img src="arrow.png" alt="Arrow Image" />
        </button>
      </div>
      <div className={styles.walletInfo}>
        <div className={styles.walletName}>Argent</div>
        <img src="Argent.png" alt="Argent Wallet Image" />
        <button className={styles.selectButton}>
          <img src="arrow.png" alt="Arrow Image" />
        </button>
      </div>
    </div>
  );
};
