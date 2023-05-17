import Head from "next/head";
// import { Sidebar } from "../components/sidebar/sidebar";
import { useRouter } from "next/router";
import styles from "../styles/failId.module.css";

const IdFailurePage = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main> */}
      {/* <Sidebar /> */}
      <div className={styles["error-box"]}>
        <img
          className={styles["error-icon"]}
          src="Vector.png"
          alt="Error Icon"
        />
        <p className={styles["error-message"]}>Opps!</p>
        <p className={styles["error-message"]}>Polygon ID Verification ERROR</p>
        <p className={styles["error-details"]}>
          It seems likes the wallet does not contain VC that meets the criteria.
          Check the wallet again and get ID from
        </p>
        <button onClick={handleRetry} className={styles["retry-button"]}>
          BACK
        </button>
      </div>
      {/* </main> */}
    </div>
  );
};

export default IdFailurePage;
