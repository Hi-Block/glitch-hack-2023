import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navBar/navBar';
import { Footer } from '../components/footer/footer';
import { Box } from "@mui/material";
import { ConnectWalletButton } from "../components/connectWalletButton/connectWalletButton";
import StatisticBox from '../components/statisticBox/statisticBox';
import SurveyRow from '../components/surveyRow.tsx/SurveyRow';
import CircularStatic from '../components/circularProgressWithLabel/CircularProgressWithLabel';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function Home() {
    const currentPage = "Ongoing";

  return (
    <div className={styles.container}>
        <Head>
        <title>Ongoing Survey</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar currentPage={currentPage} />
        <main>
            <Box sx={{
                width: "100%",
                margin: "2rem 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box sx={{
                    width: "100%",
                    margin: "1rem 0 1rem 0.5rem",
                    fontSize: "1.5rem",
                    fontFamily: "Kanit",
                    fontWeight: "600",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <span>Ongoing Survey</span>
                    <Box sx={{
                        padding: "0 2rem",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        // color: "#8247E5",
                        opacity: "0.5",
                    }}>
                        <SearchIcon sx={{margin: "0 1rem",}} />
                        <FilterListIcon sx={{margin: "0 1rem",}} />
                    </Box>
                </Box>
                <SurveyRow cat={'th'} name={'2030 Smartphone Preference'} prerequisite={'Age: 20-30'} endDate={'10D 23H Left'} reward={'0.04'} progress={"4830/5000"} arrow={true} />
                <SurveyRow cat={'td'} name={'2030 Smartphone Preference'} prerequisite={'Age: 20-30'} endDate={'10D 23H Left'} reward={'0.04'} progress={"4830/5000"} arrow={true} />
                <SurveyRow cat={'td'} name={'Glitch Hackathon Feedback Survey'} prerequisite={'POAP: Glitch'} endDate={'8H Left'} reward={'0.12'} progress={"31/200"} arrow={true} />
                <SurveyRow cat={'td'} name={'Korean Instant Noodle Survey'} prerequisite={'Nat.: Korea'} endDate={'23D 17H Left'} reward={'0.05'} progress={"3234/5000"} arrow={true} />
                <SurveyRow cat={'td'} name={'3040 Transportation Preference'} prerequisite={'Age: 30-40'} endDate={'31D 1H Left'} reward={'0.04'} progress={"137/500"} arrow={true} />
                <Box sx={{ marginTop: "30px", width: "100px", height:"30px", borderRadius:"20px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color:"#6234af90", backgroundColor:"#8247e530"}}>More</Box>
            </Box>
        </main>
        <footer>
            <Footer />
        </footer>

        <style jsx>{`
            main {
            // width: 100%;
            width: 1300px;
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
