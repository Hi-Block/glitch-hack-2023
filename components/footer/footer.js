import styles from "./Footer.module.css";

export const Footer = function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>30FY</div>
      <div className={styles.detail}>
        <div>Decentralized Survey Platform powered by Polygon ID.</div>
        <div>2023 HYBLOCK TF LTD.</div>
      </div>
    </div>
  );
};
