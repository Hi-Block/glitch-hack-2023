import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navBar/navBar';
import { Footer } from '../components/footer/footer';
import { Box } from "@mui/material";
import { ConnectWalletButton } from "../components/connectWalletButton/connectWalletButton";

export default function Home() {
    const currentPage = "Status";

  return (
    <div className={styles.container}>
        <Head>
        <title>Connect Wallet</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar currentPage={currentPage} />
        <main>
            <Box sx={{
                width: "100%",
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "center",
            }}>
                <Box sx={{
                    marginBottom: "2rem",
                    // width: "90px",
                    // height: "calc(100vh - 100px)",
                    color: "#1C1D22",
                    opacity: "0.5",
                    // display:"flex",
                    // flexDirection: "column",
                    // justifyContent: "space-between",
                    fontFamily: "Exo2",
                    fontWeight: "600",
                    fontSize: "36px",
                }}>
                    <div>

                        Connect wallet to see this page
                    </div>
                </Box>
                <ConnectWalletButton />
            </Box>
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
  )
}
