import { Box } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircularStatic from "../circularProgressWithLabel/CircularProgressWithLabel"

export default function SurveyRow(props : surveyRowProps) {
    let dayClose = ((((props.endDate).indexOf("D")) < 0) && ((props.endDate).indexOf("Left")>-1)) ? true : false;
    let words = (props.progress).split("/");
    let progressLimitClose = 0;
    if((parseInt(words[0]))/(parseInt(words[1])) >= 0.8) {
        progressLimitClose = 2;
    }
    else if((parseInt(words[0]))/(parseInt(words[1])) <= 0.2) {
        progressLimitClose = 1;
    }
    if(props.cat == "th") {
        return (
            <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "40px", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", 
                    backgroundColor:"#f3f4f7", fontFaimily:"Kanit", fontSize:"1rem", fontWeight:"500", opacity:"0.6"}}>
                <Box sx={{width: "30%"}}>Survey Name</Box>
                <Box sx={{width: "20%"}}>Prerequisite</Box>
                <Box sx={{width: "15%"}}>End Date</Box>
                <Box sx={{width: "15%"}}>Reward Amount</Box>
                <Box sx={{width: "15%"}}>Progress</Box>
                <Box sx={{width: "5%", color: "#8247E5"}}>&nbsp;</Box>
            </Box>
        )
    }
    else if(dayClose) {
        if(progressLimitClose == 2) {
            return(
                <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
                        backgroundColor:"white", borderRadius:"20px", fontFaimily:"Kanit", fontSize:"1.2rem", fontWeight:"600",}}>
                    <Box sx={{width: "30%"}}>{props.name}</Box>
                    <Box sx={{width: "20%"}}>{props.prerequisite}</Box>
                    <Box sx={{width: "15%", color: "red"}}>{props.endDate}</Box>
                    <Box sx={{width: "15%"}}>{props.reward}</Box>
                    <Box sx={{width: "15%", color: "red"}}>{props.progress}</Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontSize:"3rem"}}><ArrowRightAltIcon style={{fontSize:"2.5rem"}} /></Box> */}
                    <Box sx={{width: "5%", color: "#8247E5",}}><ArrowForwardIcon style={{fontSize:"2rem"}} /></Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontWeight:"900",}}>&#x2192;</Box>
                    <Box sx={{width: "10%", color: "#8247E5"}}>\u27B5</Box> */}
                </Box>
            )
        }
        else if(progressLimitClose == 1) {
            return(
                <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
                        backgroundColor:"white", borderRadius:"20px", fontFaimily:"Kanit", fontSize:"1.2rem", fontWeight:"600",}}>
                    <Box sx={{width: "30%"}}>{props.name}</Box>
                    <Box sx={{width: "20%"}}>{props.prerequisite}</Box>
                    <Box sx={{width: "15%", color: "red"}}>{props.endDate}</Box>
                    <Box sx={{width: "15%"}}>{props.reward}</Box>
                    <Box sx={{width: "15%", color: "orange"}}>{props.progress}</Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontSize:"3rem"}}><ArrowRightAltIcon style={{fontSize:"2.5rem"}} /></Box> */}
                    <Box sx={{width: "5%", color: "#8247E5",}}><ArrowForwardIcon style={{fontSize:"2rem"}} /></Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontWeight:"900",}}>&#x2192;</Box>
                    <Box sx={{width: "10%", color: "#8247E5"}}>\u27B5</Box> */}
                </Box>
            )
        }
        else {
            return(
                <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
                        backgroundColor:"white", borderRadius:"20px", fontFaimily:"Kanit", fontSize:"1.2rem", fontWeight:"600",}}>
                    <Box sx={{width: "30%"}}>{props.name}</Box>
                    <Box sx={{width: "20%"}}>{props.prerequisite}</Box>
                    <Box sx={{width: "15%", color: "red"}}>{props.endDate}</Box>
                    <Box sx={{width: "15%"}}>{props.reward}</Box>
                    <Box sx={{width: "15%"}}>{props.progress}</Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontSize:"3rem"}}><ArrowRightAltIcon style={{fontSize:"2.5rem"}} /></Box> */}
                    <Box sx={{width: "5%", color: "#8247E5",}}><ArrowForwardIcon style={{fontSize:"2rem"}} /></Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontWeight:"900",}}>&#x2192;</Box>
                    <Box sx={{width: "10%", color: "#8247E5"}}>\u27B5</Box> */}
                </Box>
            )
        }
    }
    else {
        if(progressLimitClose == 2) {
            return(
                <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
                        backgroundColor:"white", borderRadius:"20px", fontFaimily:"Kanit", fontSize:"1.2rem", fontWeight:"600",}}>
                    <Box sx={{width: "30%"}}>{props.name}</Box>
                    <Box sx={{width: "20%"}}>{props.prerequisite}</Box>
                    <Box sx={{width: "15%"}}>{props.endDate}</Box>
                    <Box sx={{width: "15%"}}>{props.reward}</Box>
                    <Box sx={{width: "15%", color: "red"}}>{props.progress}</Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontSize:"3rem"}}><ArrowRightAltIcon style={{fontSize:"2.5rem"}} /></Box> */}
                    <Box sx={{width: "5%", color: "#8247E5",}}><ArrowForwardIcon style={{fontSize:"2rem"}} /></Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontWeight:"900",}}>&#x2192;</Box>
                    <Box sx={{width: "10%", color: "#8247E5"}}>\u27B5</Box> */}
                </Box>
            )
        }
        else if(progressLimitClose == 1) {
            return(
                <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
                        backgroundColor:"white", borderRadius:"20px", fontFaimily:"Kanit", fontSize:"1.2rem", fontWeight:"600",}}>
                    <Box sx={{width: "30%"}}>{props.name}</Box>
                    <Box sx={{width: "20%"}}>{props.prerequisite}</Box>
                    <Box sx={{width: "15%"}}>{props.endDate}</Box>
                    <Box sx={{width: "15%"}}>{props.reward}</Box>
                    <Box sx={{width: "15%", color: "orange"}}>{props.progress}</Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontSize:"3rem"}}><ArrowRightAltIcon style={{fontSize:"2.5rem"}} /></Box> */}
                    <Box sx={{width: "5%", color: "#8247E5",}}><ArrowForwardIcon style={{fontSize:"2rem"}} /></Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontWeight:"900",}}>&#x2192;</Box>
                    <Box sx={{width: "10%", color: "#8247E5"}}>\u27B5</Box> */}
                </Box>
            )
        }
        else {
            return(
                <Box sx={{marginBottom: "0.4rem", padding: "0 2rem",width: "1300px", height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
                        backgroundColor:"white", borderRadius:"20px", fontFaimily:"Kanit", fontSize:"1.2rem", fontWeight:"600",}}>
                    <Box sx={{width: "30%"}}>{props.name}</Box>
                    <Box sx={{width: "20%"}}>{props.prerequisite}</Box>
                    <Box sx={{width: "15%"}}>{props.endDate}</Box>
                    <Box sx={{width: "15%"}}>{props.reward}</Box>
                    <Box sx={{width: "15%"}}>{props.progress}</Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontSize:"3rem"}}><ArrowRightAltIcon style={{fontSize:"2.5rem"}} /></Box> */}
                    <Box sx={{width: "5%", color: "#8247E5",}}><ArrowForwardIcon style={{fontSize:"2rem"}} /></Box>
                    {/* <Box sx={{width: "10%", color: "#8247E5", fontWeight:"900",}}>&#x2192;</Box>
                    <Box sx={{width: "10%", color: "#8247E5"}}>\u27B5</Box> */}
                </Box>
            )
        }
    }

};

interface surveyRowProps {
    cat : "th" | "td",
    name : string
    prerequisite : string
    endDate : string
    reward : string
    progress : string
    arrow : boolean
}
