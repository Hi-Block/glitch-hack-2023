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
import CloseIcon from '@mui/icons-material/Close';

export default function Home() {
    const currentPage = "Ongoing";

  return (
    <div className={styles.container}>
        <Head>
        <title>Survey #61 Detail</title>
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
                    fontSize: "1.8rem",
                    fontFamily: "Kanit",
                    fontWeight: "700",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <span>Survey # 61</span>
                    <CloseIcon sx={{margin:"0 2rem", color:"gray", fontSize:"2rem"}}/>
                </Box>
                <Box sx={{
                    width: "100%",
                    margin: "1rem 0 1rem 0.5rem",
                    padding: "2rem 2rem",
                    fontSize: "1.5rem",
                    fontFamily: "Kanit",
                    fontWeight: "600",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                }}>
                    <Box sx={{margin:"1rem 0", fontFamily:"Kanit", fontSize:"2rem", fontWeight:"500",}}>2030 Smartphone Preference</Box>
                    <Box sx={{margin:"1rem 0", fontFamily:"Exo2", color:"gray", opacity:"0.8", fontSize:"0.9rem",}}>This survey is operated by Samsung Electronics in order to question young smartphone users about the brand preferences.<br />This data will be used to enhance the quality of upcoming Galaxy smartphone and its brand to new users.<br />Survey will be conducted approximately for 5-7 minutes, consists of 3 short answering questions & 9 checkbox questions.</Box>
                    <Box sx={{margin:"1rem 0", fontFamily:"Kanit", fontSize:"1.5rem", fontWeight:"500",}}>Details</Box>
                    <Box sx={{display:"flex", flexDirection:"row", margin:"1rem 0", fontFamily:"Exo2", fontSize:"1.2rem", fontWeight:"500",}}>
                        <Box sx={{margin:"0 2rem 0 0", width:"260px",}}>
                            <Box sx={{color:"gray", opacity:"0.8",}}>Prerequisites</Box>
                            <Box sx={{margin:"1rem 0 0 1rem"}}>Age: 20-30</Box>
                        </Box>
                        <Box sx={{margin:"0 2rem 0 0", width:"260px"}}>
                            <Box sx={{color:"gray", opacity:"0.8",}}>Deadline</Box>
                            <Box sx={{margin:"1rem 0 0 1rem"}}>10D 23H</Box>
                        </Box>
                        <Box sx={{margin:"0 2rem 0 0", width:"260px"}}>
                            <Box sx={{color:"gray", opacity:"0.8",}}>Reward Amount</Box>
                            <Box sx={{margin:"1rem 0 0 1rem"}}>0.04 USDC</Box>
                        </Box>
                        <Box sx={{margin:"0", width:"260px"}}>
                            <Box sx={{color:"gray", opacity:"0.8",}}>Progress</Box>
                            <Box sx={{margin:"1rem 0 0 1rem"}}>4831/5000</Box>
                        </Box>
                    </Box>
                    <Box sx={{margin:"1rem 0", display:"flex",flexDirection:"column",alignItems:"center",}}>
                        <Box sx={{ margin: "50px 0 0px 0", width: "300px", height:"30px", borderRadius:"20px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontSize:"1rem", color:"#FFFFFF", backgroundColor:"#6234af90"}}>Start Survey with Polygon ID</Box>
                    </Box>
                </Box>
                {/* <SurveyRow cat={'th'} name={'2030 Smartphone Preference'} prerequisite={'Age: 20-30'} endDate={'10D 23H Left'} reward={'0.04'} progress={"4830/5000"} arrow={true} />
                <SurveyRow cat={'td'} name={'2030 Smartphone Preference'} prerequisite={'Age: 20-30'} endDate={'10D 23H Left'} reward={'0.04'} progress={"4830/5000"} arrow={true} />
                <SurveyRow cat={'td'} name={'Glitch Hackathon Feedback Survey'} prerequisite={'POAP: Glitch'} endDate={'8H Left'} reward={'0.12'} progress={"31/200"} arrow={true} />
                <SurveyRow cat={'td'} name={'Korean Instant Noodle Survey'} prerequisite={'Nat.: Korea'} endDate={'23D 17H Left'} reward={'0.05'} progress={"3234/5000"} arrow={true} />
                <SurveyRow cat={'td'} name={'3040 Transportation Preference'} prerequisite={'Age: 30-40'} endDate={'31D 1H Left'} reward={'0.04'} progress={"137/500"} arrow={true} />
                <Box sx={{ marginTop: "30px", width: "100px", height:"30px", borderRadius:"20px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color:"#6234af90", backgroundColor:"#8247e530"}}>More</Box> */}
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
