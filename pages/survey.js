// import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { NavBar } from "../components/navBar/navBar";
import { Footer } from "../components/footer/footer";
import { SurveyBox } from "../components/surveyBox/surveyBox";

export default function Home() {
  const currentPage = "Ongoing";
  return (
    <div className={styles.container}>
      <NavBar currentPage={currentPage} />
      <main>
        <SurveyBox />
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
