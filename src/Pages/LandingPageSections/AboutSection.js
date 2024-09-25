import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const AboutSection = () => {
  const features = [
    {
      imgSrc: "https://via.placeholder.com/300",
      imgAlt: "Screenshot of the Task Management feature",
      description:
        "This screenshot showcases the Task Management feature, allowing users to create and manage tasks efficiently.",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      imgAlt: "Screenshot of the Progress Tracking feature",
      description:
        "The Progress Tracking feature provides visual indicators to help users monitor their task completion and overall project status.",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      imgAlt: "Screenshot of the Collaboration feature",
      description:
        "This image illustrates the Collaboration feature, where users can share tasks and updates with team members.",
    },
  ];

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        About the Task Organizer App
      </Typography>
      <Typography variant="body1" paragraph>
        The Task Organizer app is designed to provide users with an intuitive
        platform for managing tasks and projects efficiently. With features that
        enable users to create, track, and collaborate on tasks, this app helps
        individuals and teams enhance their productivity and stay organized.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Features
      </Typography>
      <Box>
        {features.map((feature, index) => (
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ marginBottom: 2 }}
            flexDirection={{
              xs: "column",
              sm: index % 2 === 0 ? "row" : "row-reverse",
            }}
            key={index}
          >
            <Grid item xs={12} sm={6}>
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" align="left" paragraph>
                {feature.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Paper>
  );
};

export default AboutSection;
