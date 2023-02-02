import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#03A9F4",
    },
  },
  typography:{
    fontFamily:"Vazir,Yekan,tahoma,roboto",
  }
});
