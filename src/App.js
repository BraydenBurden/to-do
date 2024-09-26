import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./Theme"; // Import the themes
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Dashboard from "./Pages/Dashboard";
import ProjectsPage from "./Pages/ProjectPage";
import { UserProvider } from "./Context/UserContext";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:3010";
  const [darkMode, setDarkMode] = useState(false); // State to manage light/dark mode

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDarkMode(!darkMode)}
            style={{ marginTop: "20px" }}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </Button>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
