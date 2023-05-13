import { Tabs, Tab, ThemeProvider, Box } from "@mui/material";
import { sidebarStyles, sidebarTheme } from "./sidebarStyle.css";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Sidebar = function Sidebar(props) {
    const classes = sidebarStyles(props);
    return (
        <div className={classes.sidebar}>
            <Tabs
                // value={value}
                // onChange={handleChange}
                className={classes.tabs}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
                orientation="vertical"
            >
                <Tab icon={<GridViewOutlinedIcon className={classes.icon}/>} title="item1" />
                <Tab icon={<PersonOutlineOutlinedIcon className={classes.icon}/>} title="item1" />
                <Tab icon={<CalendarMonthOutlinedIcon className={classes.icon}/>} title="item1" />
                {/* <Tab icon={<LogoutOutlinedIcon className={classes.icon} />} title="item1" /> */}
                {/* <Tab icon={<GridViewOutlinedIcon />} title="item1" />
                <Tab icon={<PersonOutlineOutlinedIcon />} title="item1" />
                <Tab icon={<CalendarMonthOutlinedIcon />} title="item1" />
                <Tab icon={<LogoutOutlinedIcon />} title="item1" /> */}
            </Tabs>
            <Tabs className={classes.tabs} >
                <Tab icon={<LogoutOutlinedIcon className={classes.icon} />} title="item1" />
            </Tabs>
        </div>
        // <ThemeProvider theme={sidebarTheme}>
        // </ThemeProvider>
    )
};

