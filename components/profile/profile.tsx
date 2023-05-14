import { Box, Avatar } from "@mui/material";
import { profileStyles } from "./profile.css";
import SearchIcon from '@mui/icons-material/Search';
import { deepPurple } from "@mui/material/colors";

export const Profile = function Profile(props) {
    const classes = profileStyles(props);
    return (
        <div className={classes.profileBar}>
            <Box><SearchIcon className={classes.svg} /></Box>
            <Box className={classes.balance}><div><embed className={classes.svg} src="https://www.cryptologos.cc/logos/polygon-matic-logo.svg" /> </div><div id="matic" className={classes.balanceTxt}></div><div className={classes.balanceTxt}>MATIC</div></Box>
            <Box className={classes.balance}><div><embed className={classes.svg} src="https://cryptologos.cc/logos/tether-usdt-logo.svg" / ></div><div id="usdt" className={classes.balanceTxt}></div><div className={classes.balanceTxt}>USDT</div></Box>
            <Box><Avatar className={classes.avatar} sx={{ bgcolor:deepPurple[500], }}>HY</Avatar></Box>
        </div>
    )
};

