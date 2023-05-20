import React from "react";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/navBar/navBar";
import { MainBox } from "../components/mainBox/mainBox";
import { Footer } from "../components/footer/footer";
export default function Home() {
  const currentPage = "Complete";
  //어느 페이지에서 넘어오는지 파라미터가 필요
  return (
    <div className={styles.container}>
      <NavBar currentPage={currentPage} />
      <main>
        <MainBox />
      </main>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        main {
          width: 100%;
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          // justify-content: space-between;
          justify-content: center;
          // align-items: center;
          align-items: flex-start;
        }
        footer {
          width: 100%;
          // height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
