import { Tabs, Tab, ThemeProvider, Box } from "@mui/material";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Sidebar = function Sidebar(props) {
    return (
        <Box sx={{
            width: "90px",
            height: "calc(100vh - 100px)",
            backgroundColor: "#1C1D22",
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <Tabs
                // value={value}
                // onChange={handleChange}
                sx={{margin: "3vh 0",}}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
                orientation="vertical"
            >
                <Tab icon={<GridViewOutlinedIcon sx={{
                    fontSize: "1.8rem", color: "#FFFFFF",
                    opacity: "0.6", backgroundColor: "#1C1D22",}} />} title="item1"
                />
                <Tab icon={<PersonOutlineOutlinedIcon sx={{
                    fontSize: "1.8rem", color: "#FFFFFF",
                    opacity: "0.6", backgroundColor: "#1C1D22",}} />} title="item1" 
                />
                <Tab icon={<CalendarMonthOutlinedIcon sx={{
                    fontSize: "1.8rem", color: "#FFFFFF",
                    opacity: "0.6", backgroundColor: "#1C1D22",}} />} title="item1" 
                />
            </Tabs>
            <Tabs sx={{margin: "3vh 0",}} >
                <Tab icon={<LogoutOutlinedIcon sx={{
                    fontSize: "1.8rem", color: "#FFFFFF",
                    opacity: "0.6", backgroundColor: "#1C1D22",}} />} title="item1" />
            </Tabs>
        </Box>
    )
};

