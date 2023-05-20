import { Box } from "@mui/material";

export default function StatisticBox(props : statisticBoxProps) {
    let txt1:string, txt2:string;
    if(props.cat == "Participated") {
        txt1 = "Finished";
        txt2 = "Claimed";
    }else if(props.cat == "Uploaded") {
        txt1 = "Upload";
        txt2 = "Staked";
    }else {
        txt1 = "Uploaded";
        txt2 = "Revenue";
    }
    return (
        <Box sx={{
            width: "424px",
            height: "80px",
            fontSize: "1.2rem",
            fontFamily: "Kanit",
            fontWeight: "500",
            color: "black",
            // backgroundColor: "#8247E5",
            backgroundColor: "#FFFFFF",
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "20px",
        }} >
            <Box sx={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "1.2rem",
                fontWeight: "600",
            }}
            >
                <div>
                    {props.cat}
                </div>
            </Box>
            <Box sx={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "1.2rem",
                fontWeight: "600",
            }}
            >
                <Box><span>{props.cnt}</span></Box>
                <Box sx={{
                    fontSize: "1rem",
                    opacity: "0.5",
                }}>{txt1}</Box>
            </Box>
            <Box sx={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "1.2rem",
                fontWeight: "600",
            }}
            >
                <Box><span>{props.val}</span><span> USDC</span></Box>
                <Box sx={{
                    fontSize: "1rem",
                    opacity: "0.5",
                }}>{txt2}</Box>
            </Box>
        </Box>
    )
};

interface statisticBoxProps {
    cat : "Participated"|"Uploaded"|"Data Market",
    cnt : number
    val : number
}
