import { DefaultTheme, makeStyles } from '@mui/styles';

export const profileStyles = makeStyles<DefaultTheme>({
  profileBar: {
    marginRight: "auto",
    width: "30vh",
    height: "34px",
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  svg: {
    margin: "0 1rem",
    height: "34px",
    width: "34px",
    color: "#1c1d2278",
  },
  avatar: {
    margin: "0 1rem",
    height: "34px",
    width: "34px",
  },
  balance: {
    margin: "0 1rem",
    display:"flex",
    flexDirection: "row",
  },
  balanceTxt: {
    height: "34px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#1c1d2278",
    textAlign: "center",
  },
});
