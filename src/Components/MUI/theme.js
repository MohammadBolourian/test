import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#0c70bf",
    },
    secondary: {
      main: "#1381b3",
    },
    background:{
      main:"rgb(203,198,198)"
    },
    icon:{
      main:"#8664ef",
    },
    dropItem:{
      main:'#f1f5f9'
    },
  },
  typography:{
    fontFamily:"Vazir,Yekan,tahoma,roboto !important",
  }
});
