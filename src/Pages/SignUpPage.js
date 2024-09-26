import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: Validate password requirements
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      setErrorMessage(passwordValidation.message);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Reset messages
    setErrorMessage("");
    setSuccessMessage("");
    setEmailSent(false);

    // Simulating backend response (replace this with actual backend logic)
    const userExists = false; // Simulated response (should be replaced with actual backend check)
    console.log({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });

    const response = await axios.post("/registration/register", {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });

    if (userExists) {
      setErrorMessage("Email already exists.");
    } else {
      setSuccessMessage("A verification email has been sent.");
      setEmailSent(true);
      setIsSubmitted(true); // Set submitted state to true
    }
  };

  const resendVerificationEmail = () => {
    axios.post("/registration/resendVerificationEmail", {
      email: email,
    });
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasTwoDigits = (password.match(/\d/g) || []).length >= 2;

    if (!hasUpperCase) {
      return {
        valid: false,
        message: "Password must contain at least one capital letter.",
      };
    }
    if (!hasSpecialChar) {
      return {
        valid: false,
        message: "Password must contain at least one special character.",
      };
    }
    if (!hasTwoDigits) {
      return {
        valid: false,
        message: "Password must contain at least two integers.",
      };
    }
    return { valid: true };
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>

      {!isSubmitted ? ( // Conditional rendering based on submission state
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            size="small" // Set the size to small
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            size="small" // Set the size to small
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            size="small" // Set the size to small
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            required
            size="small"
          >
            {" "}
            {/* Set the size to small */}
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText>
              {password.length > 0 &&
                "Password must contain at least one capital letter, one special character, and two digits."}
            </FormHelperText>
          </FormControl>

          {/* Confirm Password Input */}
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            required
            size="small"
          >
            {" "}
            {/* Set the size to small */}
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>

          {errorMessage && (
            <Typography
              color="error"
              variant="body2"
              style={{ marginTop: "10px" }}
            >
              {errorMessage}
            </Typography>
          )}
        </form>
      ) : (
        // Confirmation message displayed if signup is successful
        <>
          <Typography
            color="primary"
            variant="body1"
            style={{ marginTop: "10px" }}
          >
            {successMessage}
          </Typography>
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#00BFFF",
              }}
            >
              Back to Landing Page
            </Link>
          </Typography>
        </>
      )}

      {isSubmitted && (
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={resendVerificationEmail}
        >
          Resend Verification Email
        </Button>
      )}

      {/* Link to go back to Login Page */}
      {!isSubmitted ? (
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#00BFFF" }}
          >
            Login!
          </Link>
        </Typography>
      ) : (
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Typography>
      )}
    </Paper>
  );
};

export default SignUpPage;
