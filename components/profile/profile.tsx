import { Box, Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { deepPurple } from "@mui/material/colors";

export const Profile = function Profile(props) {
    return (
        <Box
            sx={{
                display:"flex",
                flexDirection: "row-reverse",
            }}
        >
            <Box 
                sx={{
                    margin: "1rem 1rem 0 0",
                    // width: "30vh",
                    height: "34px",
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
            <Box>
                <SearchIcon 
                    sx={{
                        margin: "0 1rem",
                        height: "34px",
                        width: "34px",
                        color: "#1c1d2278",
                    }}
                />
            </Box>
            <Box sx={{
                margin: "0 1rem",
                display:"flex",
                flexDirection: "row",
            }}>
            <div>
                <embed style={{
                    margin: "0 1rem",
                    height: "34px",
                    width: "34px",
                    color: "#1c1d2278",
                }} src="https://www.cryptologos.cc/logos/polygon-matic-logo.svg" />
            </div>
            <div id="matic" style={{
                height: "34px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#1c1d2278",
                textAlign: "center",}}>
            </div>
            <div style={{
                height: "34px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#1c1d2278",
                textAlign: "center",}}>MATIC</div></Box>
            <Box sx={{
                    margin: "0 1rem",
                    display:"flex",
                    flexDirection: "row",
                }}>
                <div><embed style={{
                    margin: "0 1rem",
                    height: "34px",
                    width: "34px",
                    color: "#1c1d2278",
                }} src="https://cryptologos.cc/logos/tether-usdt-logo.svg" / ></div>
                <div id="usdt" style={{height: "34px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#1c1d2278",
                    textAlign: "center",}}></div>
                <div style={{height: "34px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#1c1d2278",
                    textAlign: "center",}}>USDT</div>
            </Box>
                <Box>
                    <Avatar sx={{
                        margin: "0 1rem",
                        height: "34px",
                        width: "34px",
                        bgcolor:deepPurple[500],
                    }} >HY</Avatar>
                </Box>
            </Box>
        </Box>
    )
};

