import { useRouter } from "next/router";
import styles from "./navbar.module.css";

const NavBar = () => {
  const router = useRouter();

  const handleItemClick = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navTitle}>Surveyer</div>
      <div className={styles.navMenu}>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page1")}
        >
          Item 1
        </div>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page2")}
        >
          Item 2
        </div>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page3")}
        >
          Item 3
        </div>
      </div>
      <div
        className={styles.navButton}
        onClick={() => handleItemClick("/button-page")}
      >
        Connect Wallet
      </div>
    </div>
  );
};

export default NavBar;
