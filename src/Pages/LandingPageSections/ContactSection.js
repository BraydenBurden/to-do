import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to the server/database.
    console.log("Form data submitted:", formData);

    // Simulate success state
    setFormSubmitted(true);

    // Simulate sending an email (replace with actual email sending logic)
    // You can use a service like EmailJS or a backend API for this.
    alert(`Email sent to: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      reason: "",
    });
  };

  const handleSendAnother = () => {
    setFormSubmitted(false);
    handleClear();
  };

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      {!formSubmitted ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            name="reason"
            label="Reason for Contacting"
            variant="outlined"
            multiline
            rows={4}
            value={formData.reason}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={handleClear}
            >
              Clear Form
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Thank you for reaching out!
          </Typography>
          <Typography variant="body1" paragraph>
            Your information has been received, and we will get back to you
            shortly.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendAnother}
          >
            Send Another
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default ContactSection;
