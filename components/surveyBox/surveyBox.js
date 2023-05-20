// import React from "react";
import styles from "./SurveyBox.module.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import { Checkbox } from "@mui/material";

export const SurveyBox = function surveyBox() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>2030 Smartphone Preference</h2>
        <button className={styles.closeButton}>
          <img src="Close.png" alt="Close Icon" />
        </button>
      </div>
      <div className={styles.explanation}>
      This survey is operated by Samsung Electronics in order to question young smartphone users about the brand preferences.<br />This data will be used to enhance the quality of upcoming Galaxy smartphone and its brand to new users.<br />Survey will be conducted approximately for 5-7 minutes, consists of 3 short answering questions & 9 checkbox questions.
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <Box sx={{ display: "flex" }}>
            <div className={styles.questionName}>Question1</div>
            <div className={styles.question}>
              What smartphone are you currently using?
            </div>
          </Box>
          <div className={styles.boxLine}>
            <Box sx={{ display: "flex", /*gap: "13%"*/ }}>
              <FormControlLabel control={<Checkbox />} label="Galaxy" />
              <FormControlLabel control={<Checkbox />} label="iPhone" />
              <FormControlLabel control={<Checkbox />} label="Xiaomi" />
              <FormControlLabel control={<Checkbox />} label="Others" />
            </Box>
          </div>
        </div>
        <div className={styles.item}>
          <Box sx={{ display: "flex" }}>
            <div className={styles.questionName}>Question2</div>
            <div className={styles.question}>
              Do you want to change it next time?
            </div>
          </Box>
          <div className={styles.boxLine}>
            <Box sx={{ display: "flex", gap: "13%" }}>
              <FormControlLabel control={<Checkbox />} label="Yes" />
              <FormControlLabel control={<Checkbox />} label="No" />
            </Box>
          </div>
        </div>
        <div className={styles.item}>
          <Box sx={{ display: "flex" }}>
            <div className={styles.questionName}>Question3</div>
            <div className={styles.question}>
              (Yes) Why do you want to change the brand?
            </div>
          </Box>
          <div className={styles.boxLine}>
            <TextField id="filled-basic" label="Type Answer" variant="filled" />
          </div>
        </div>
        <Box sx={{ marginTop: "0px", width: "180px", height:"36px", borderRadius:"20px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color:"#FFFFFF", backgroundColor:"#8247e590"}}>Complete Survey</Box>
      </div>
    </div>
  );
};
