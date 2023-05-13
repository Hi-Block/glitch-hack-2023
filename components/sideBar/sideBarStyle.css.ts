import React from "react";
import { DefaultTheme, makeStyles, withStyles } from '@mui/styles';
import { createTheme } from "@mui/material";
// import { Typography } from "@material-ui/core";

export const sidebarStyles = makeStyles<DefaultTheme>({
  sidebar: {
    width: "90px",
    height: "100vh",
    backgroundColor: "#1C1D22",
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tabs: {
    margin: "3vh 0",
  },
  icon: {
    color: "#FFFFFF",
    opacity: "0.6",
    backgroundColor: "#1C1D22",
  },
});

export const sidebarTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1C1D22',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    // custom: {
    //   light: '#ffa726',
    //   main: '#f57c00',
    //   dark: '#ef6c00',
    //   contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
  }
});
