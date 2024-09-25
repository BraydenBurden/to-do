import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme"; // Import the themes
import LandingPage from "./Pages/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false); // State to manage light/dark mode

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />{" "}
      {/* Ensures global styles like background color and text color are applied */}
      <LandingPage />
      {/* Toggle button for dark/light mode */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginTop: "20px" }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </Button>
    </ThemeProvider>
  );
}

export default App;
