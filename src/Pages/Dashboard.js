// src/pages/Dashboard.js
import React from "react";
import { Container, Typography, Box, Grid, Paper, Link } from "@mui/material";
import CustomAppBar from "./SiteComponents/AppBar";
import { useUser } from "../Context/UserContext";

const Dashboard = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <CustomAppBar />
      <Container sx={{ marginTop: "5rem" }}>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome {user.firstName}!
          </Typography>
          {user.firstSignIn && (
            <Box my={4}>
              <Typography variant="body1">
                Here are some actions to help you get started:
              </Typography>
              <Link href="http://localhost:3000/projects" underline="hover">
                <Typography variant="body2" color="primary">
                  Check your projects
                </Typography>
              </Link>
              <Link href="http://localhost:3000/profile" underline="hover">
                <Typography variant="body2" color="primary">
                  Update your profile
                </Typography>
              </Link>
            </Box>
          )}

          <Typography variant="h5" gutterBottom>
            Your Recent Projects
          </Typography>
          <Grid container spacing={3}>
            {/* Example of recent projects. Replace this with dynamic data from your state or API */}
            {[1, 2, 3].map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project}>
                <Paper elevation={3} style={{ padding: 16 }}>
                  <Typography variant="h6">Project {project}</Typography>
                  <Typography variant="body2">
                    Description of Project {project}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box mt={4}>
            <Typography variant="h5">Highest Priority Project</Typography>
            <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
              <Typography variant="h6">Priority Project Title</Typography>
              <Typography variant="body2">
                This is your highest priority project.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
