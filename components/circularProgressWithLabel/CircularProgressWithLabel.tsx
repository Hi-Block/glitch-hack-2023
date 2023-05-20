import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
// import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";

function CircularProgressWithLabel(props) {
    return (
      <Box position="absolute" display="inline-flex">
        <CircularProgress variant="determinate" {...props} sx={{zIndex:"1", color:"#8247E5"}} />
        {/* <CircularProgress variant="determinate" {...props} sx={{position:"absolute", zIndex:"0", color:"gray"}} /> */}
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >{`${Math.round(props.value)}%`}
        </Box>
    </Box>
    );
}
function CircularProgressWithGray(props) {
    return (
      <Box position="absolute" display="inline-flex">
        <CircularProgress variant="determinate" {...props} sx={{position:"absolute", zIndex:"0", color:"gray"}} />
    </Box>
    );
}
  
CircularProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate variant.
 * Value between 0 and 100.
 */
value: PropTypes.number.isRequired
};

export default function CircularStatic(props: circulatStaticProp) {
const [progress, setProgress] = React.useState(10);

React.useEffect(() => {
    const timer = setInterval(() => {
    setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
    );
    }, 800);
    return () => {
    clearInterval(timer);
    };
}, []);

return (
    <div>
        <CircularProgressWithLabel value={props.val} />
        <CircularProgressWithGray value={100} />
    </div>
)
// return <CircularProgressWithLabel value={props.val} />;
}

interface circulatStaticProp {
    val : number;
}
