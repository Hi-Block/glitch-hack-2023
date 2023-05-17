import React, { useState } from "react";
import styles from "../styles/longBox.module.css";

const LongBox = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleToggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <span className={styles.label}>Survey Name:</span>
          <span className={styles.value}>Survey 1</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Prerequisites:</span>
          <span className={styles.value}>None</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>End Date:</span>
          <span className={styles.value}>2023-05-31</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Reward:</span>
          <span className={styles.value}>$10</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Progress:</span>
          <span className={styles.value}>50%</span>
        </div>
        <button className={styles.button} onClick={handleToggleBox}>
          Toggle Box
        </button>
      </div>
      {isBoxVisible && <div className={styles.smallBox}>Small Box</div>}
    </div>
  );
};

export default LongBox;
