import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import axios from "axios";

const LoginPage = () => {
  const { updateUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // useNavigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message before submitting

    try {
      const response = await axios.post("/login/login", {
        email,
        password,
      });

      const { success } = response.data;
      const user = {
        id: response.data.user.id,
        firstName: response.data.user.first_name,
        lastName: response.data.user.last_name,
        email: response.data.user.email,
        lastSignIn: response.data.user.last_sign_in,
        firstSignIn: response.data.user.last_sign_in ? false : true,
      };

      if (success) {
        // Login succeeded
        console.log("Login successful:", user);

        // Set user state in context
        updateUser(user); // Update user in context

        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        // Login failed
        setErrorMessage("Incorrect email or password."); // Set error message
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again."); // Handle errors
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          required
        >
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
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Login
        </Button>
      </form>

      <Typography variant="body2" style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <Link
          to="/sign-up"
          style={{ textDecoration: "none", color: "#00BFFF" }}
        >
          Sign up!
        </Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: "10px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#00BFFF" }}>
          Back to Landing Page
        </Link>
      </Typography>
      {errorMessage && (
        <Typography color="error" variant="body2" style={{ marginTop: "10px" }}>
          {errorMessage}
        </Typography>
      )}
    </Paper>
  );
};

export default LoginPage;
