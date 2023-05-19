import { Box } from "@mui/material";

export const ConnectWallet = function ConnectWallet(props) {
    return (
        <Box sx={{
            width: "90px",
            height: "calc(100vh - 100px)",
            backgroundColor: "#1C1D22",
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            Connect wallet to see this page
            
        </Box>
    )
};