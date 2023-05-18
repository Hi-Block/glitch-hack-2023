import { useRouter } from "next/router";
import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
import styles from "./navbar.module.css";
import ConnectStyles from "components/walletModal/Modal.module.css";
import ModalContent from "../walletModal/modalContent";
const NavBar = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const handleItemClick = (path) => {
    router.push(path);
  };
  const handleConnectWallet = () => {
    setShowModal(true); // Connect Wallet 버튼을 클릭하면 모달을 표시
  };

  const handleModalClose = () => {
    setShowModal(false); // 모달을 닫을 때 모달 표시 상태를 false로 변경
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.navTitle}>Surveyer</div>
      <div className={styles.navMenu}>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page1")}
        >
          Ongoing
        </div>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page2")}
        >
          Complete
        </div>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page3")}
        >
          Status
        </div>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page3")}
        >
          Upload
        </div>
        <div
          className={styles.navItem}
          onClick={() => handleItemClick("/page3")}
        >
          Help
        </div>
      </div>
      {showModal && (
        <div className={ConnectStyles.modal}>
          <div className={ConnectStyles.modalContent}>
            <div className={ConnectStyles.modalHeader}>
              Choose your preferred wallet.
              <button
                className={ConnectStyles.closeButton}
                onClick={handleModalClose}
              >
                <img src="close.png" alt="Close" />
              </button>
            </div>
            <ModalContent />
            <div className={ConnectStyles.modalBottom}>
              View QR code instead
            </div>
          </div>
        </div>
      )}
      <div
        className={styles.navButton}
        onClick={handleConnectWallet}
        style={{ visibility: showModal ? "hidden" : "visible" }}
      >
        Connect Wallet
      </div>
    </div>
  );
};

export default NavBar;
