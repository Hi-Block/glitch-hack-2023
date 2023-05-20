// import React from "react";
import styles from "./MainBox.module.css";

export const MainBox = function mainBox({ surveyStatus }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.surveyNum}>Survey # 61</div>
        <img className={styles.closeButton} src="Close.png" alt="Close Icon" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}> 2030 Smartphone Preference </div>
        <div className={styles.explanation}>
          This survey is operated by Samsung Electronics in order to question
          young smartphone users about brand preference This data will be used
          to enhance upcoming Galaxy smartphone and its brand to new users.
          Survey will be conducted approximately for 5~7 minutes, with 3 short
          answered question & 9 Checkbox question.
        </div>
        <div className={styles.details}></div>
        <div className={styles.status}>serveyStatus</div>
      </div>
    </div>
  );
};
