import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import styles from "./NavBar.module.css";
import ConnectStyles from "/components/walletModal/Modal.module.css";
import { ConnectWalletButton } from "../connectWalletButton/connectWalletButton";

export const NavBar = function navBar({ currentPage }) {
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
          className={
            "Ongoing" === currentPage ? styles.activeItem : styles.navItem
          }
          onClick={() => handleItemClick("/")}
        >
          Ongoing
        </div>
        <div
          className={
            "Complete" === currentPage ? styles.activeItem : styles.navItem
          }
          onClick={() => handleItemClick("/complete")}
        >
          Complete
        </div>
        <div
          className={
            "Status" === currentPage ? styles.activeItem : styles.navItem
          }
          onClick={() => handleItemClick("/page3")}
        >
          Status
        </div>
        <div
          className={
            "Upload" === currentPage ? styles.activeItem : styles.navItem
          }
          onClick={() => handleItemClick("/page3")}
        >
          Upload
        </div>
        <div
          className={
            "Help" === currentPage ? styles.activeItem : styles.navItem
          }
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
            <div className={ConnectStyles.modalBottom}>
              View QR code instead
            </div>
          </div>
        </div>
      )}
      <ConnectWalletButton />
      {/* <div
        className={styles.navButton}
        onClick={handleConnectWallet}
        style={{ visibility: showModal ? "hidden" : "visible" }}
      >
        Connect Wallet
      </div> */}
    </div>
  );
};
