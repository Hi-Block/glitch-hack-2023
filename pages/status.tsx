import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navbar/navBar';
import { Footer } from '../components/footer/footer';
import { Box } from "@mui/material";
import { ConnectWalletButton } from "../components/connectWalletButton/connectWalletButton";
import StatisticBox from '../components/statisticBox/statisticBox';
import SurveyRow from '../components/surveyRow.tsx/SurveyRow';
import CircularStatic from '../components/circularProgressWithLabel/CircularProgressWithLabel';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function Home() {
    const currentPage = "Status";

  return (
    <div className={styles.container}>
        <Head>
        <title>Status Page</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar currentPage={currentPage} />
        <main>
            <Box sx={{
                width: "100%",
                margin: "0 0 2rem 0",
            }}>
                <Box sx={{
                    margin: "1rem 0 1rem 0.5rem",
                    fontSize: "1.5rem",
                    fontFamily: "Kanit",
                    fontWeight: "600",
                }}>
                    Statistic
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <StatisticBox cat={'Participated'} cnt={100} val={200} />
                    <StatisticBox cat={'Uploaded'} cnt={100} val={200} />
                    <StatisticBox cat={'Data Market'} cnt={100} val={200} />
                </Box>
            </Box>
            <Box sx={{
                width: "100%",
                margin: "2rem 0",
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
                    <span>Participated Survey</span>
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
                <SurveyRow cat={'th'} name={'설문조사입니다'} prerequisite={'prerequisite'} endDate={'2023.05.05'} reward={'3'} progress={"40/50"} arrow={true} />
                <SurveyRow cat={'td'} name={'설문조사입니다'} prerequisite={'prerequisite'} endDate={'2023.05.05'} reward={'3'} progress={"70/100"} arrow={true} />
            </Box>
            <Box sx={{
                width: "100%",
                margin: "2rem 0",
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
                    <span>Uploaded Survey</span>
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
                <SurveyRow cat={'th'} name={'설문조사입니다'} prerequisite={'prerequisite'} endDate={'2023.05.05'} reward={'3'} progress={"40"} arrow={true} />
                <SurveyRow cat={'td'} name={'설문조사입니다'} prerequisite={'prerequisite'} endDate={'2023.05.05'} reward={'3'} progress={"40"} arrow={true} />
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
