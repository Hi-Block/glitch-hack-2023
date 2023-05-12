import { Tabs, Tab } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';

function SideBar(props) {
    return (
        <div className="sideBar">
            <Tabs
            // value={value}
            // onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            orientation="vertical"
            >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <svg data-testid="AppsIcon"></svg>
            </Tabs>/
        </div>
    )
};

// export default function SideBar() {
//     return (
//         <div>
//             <SideBar />
//         </div>
//     );
// }

export default SideBar;
