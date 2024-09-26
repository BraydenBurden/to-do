import React, { useState } from "react";
import {
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomAppBar from "./SiteComponents/AppBar";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    { name: "Test Project", progress: 99, team: "Team C" },
  ]); // Replace with actual project fetching
  const [modalOpen, setModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ name: "", team: "" });
  const [loading, setLoading] = useState(false);

  const colors = [
    "#ff0000", // 0% - Red
    "#ff0a00", // 5%
    "#ff1500", // 10%
    "#ff3300", // 15%
    "#ff6600", // 20%
    "#ff9900", // 25%
    "#ffcc00", // 30%
    "#ffff00", // 35% - Yellow
    "#e5ff00", // 40%
    "#ccff00", // 45%
    "#b3ff00", // 50% - Yellow
    "#99ff00", // 55%
    "#66ff00", // 60%
    "#33ff00", // 65%
    "#00ff00", // 70%
    "#00cc00", // 75%
    "#009900", // 80%
    "#007f00", // 85%
    "#006600", // 90%
    "#00b300", // 95%
    "#00b300", // 100% - Green
  ];

  const teams = ["Team A", "Team B", "Team C"];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateProject = () => {
    setLoading(true);
    // Simulate project creation and close modal
    setTimeout(() => {
      setProjects([...projects, { ...newProject, progress: 0 }]); // Add the new project to the list
      setNewProject({ name: "", team: "" });
      setLoading(false);
      handleCloseModal();
    }, 1500);
  };

  return (
    <Box>
      <CustomAppBar />

      <Box sx={{ marginTop: "80px", padding: "20px" }}>
        {projects.length === 0 ? (
          <Typography variant="h5" align="center" color="textSecondary">
            No projects available
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                {console.log(project)}
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box>
                        <Typography variant="h6">{project.name}</Typography>
                        <Typography color="textSecondary" variant="body2">
                          Team: {project.team}
                        </Typography>
                      </Box>

                      <CardActions
                        sx={{
                          alignSelf: "flex-start",
                          padding: "0",
                          margin: "0",
                        }}
                      >
                        <Button
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          onClick={() => console.log("View Project")}
                          sx={{
                            textTransform: "none",
                          }} // Prevent text from being uppercase
                        >
                          <Typography
                            variant="body2"
                            alignSelf={"flex-start"}
                            justifySelf={"flex-start"}
                          >
                            View Project
                          </Typography>
                        </Button>
                      </CardActions>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginTop: "1rem",
                        borderRadius: "5px",
                        height: "2rem",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        border: "1px solid black",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${project.progress}%`,
                          backgroundColor:
                            colors[Math.floor(project.progress / 5)],
                          transition: "width 0.5s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          borderRadius: "5px",
                          borderRight:
                            project.progress < 100
                              ? "1px solid lightgray"
                              : "none",
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              position: "absolute",
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                              color: "transparent", // Makes the original text transparent
                              WebkitTextStroke: "1px black", // Change to your desired outline color
                              fontWeight: "900",
                            }}
                          >
                            {project.progress === 100
                              ? "Completed"
                              : `${project.progress}%`}
                          </Typography>
                          <Typography
                            color="white"
                            sx={{ textAlign: "center", fontWeight: "800" }}
                          >
                            {project.progress === 100
                              ? "Completed"
                              : `${project.progress}%`}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Centered Create Project Button */}
        <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Create Project
          </Button>
        </Box>

        {/* Modal for Creating a Project */}
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              p: 4,
              boxShadow: 24,
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", fontSize: "1.75rem" }}
            >
              Create New Project
            </Typography>
            <TextField
              fullWidth
              label="Project Name"
              value={newProject.name}
              size="small"
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
              sx={{ marginBottom: 2 }}
            />
            <Select
              fullWidth
              value={newProject.team}
              onChange={(e) =>
                setNewProject({ ...newProject, team: e.target.value })
              }
              size="small"
              displayEmpty // This prop allows the placeholder to be shown
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="" disabled>
                Team
              </MenuItem>
              {teams.map((team, index) => (
                <MenuItem key={index} value={team}>
                  {team}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateProject}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Create Project"}
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
