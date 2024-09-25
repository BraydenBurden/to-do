import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import AboutSection from "./LandingPageSections/AboutSection";
import ContactSection from "./LandingPageSections/ContactSection";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Bar with Login and Signup */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Organizer
          </Typography>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/sign-up")}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Task Organizer
        </Typography>
        <Typography variant="body1" paragraph>
          Stay organized and manage your tasks efficiently with our easy-to-use
          task management system.
        </Typography>
        {/* About Section */}
        <AboutSection />
        {/* Space between sections */}
        <Box sx={{ margin: 2 }} /> {/* Adds space */}
        {/* Contact Section */}
        <ContactSection />
      </Container>
    </div>
  );
}

export default LandingPage;
