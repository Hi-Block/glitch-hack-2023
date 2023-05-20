import { Box } from "@mui/material";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";

export const ConnectWalletButton = function connectWalletButton(props) {
    return (
        // <Box sx={{
        //     width: "180px",
        //     height: "40px",
        //     fontSize: "1.2rem",
        //     fontFamily: "Exo2",
        //     fontWeight: "500",
        //     color: "#FFFFFF",
        //     backgroundColor: "#8247E5",
        //     display: "flex",
        //     textAlign: "center",
        //     flexDirection: "column",
        //     justifyContent: "center",
        //     borderRadius: "10px",
        // }} onClick = {handleConnectWallet}>
        //     Connect Wallet
        // </Box>
        <ThirdwebProvider>
            <ConnectWallet 
                // theme={lightTheme({
                // buttonBackgroundColor: '#8247E5'
                // buttonTextColor: 'white'
                // })}
                theme="light"
                // background="#8247E5"
                style={{background: "#8247E5"}}
            />
        </ThirdwebProvider>
    )
};

function handleConnectWallet() {
    console.log("Connect Wallet Button Clicked");
};
