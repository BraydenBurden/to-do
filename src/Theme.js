import { createTheme } from "@mui/material";
import { amber, teal, green, red } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[500], // Teal as the primary color
    },
    secondary: {
      main: amber[500], // Amber as the accent color
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: teal[500], // Set the AppBar background color to teal
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[500], // Lighter teal for dark mode
    },
    secondary: {
      main: amber[500],
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    success: {
      main: green[300],
    },
    error: {
      main: red[300],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: teal[500], // Set the AppBar background color to teal
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
