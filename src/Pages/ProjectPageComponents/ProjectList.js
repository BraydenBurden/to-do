import React from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
} from "@mui/material";

const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <Card
      onClick={() => onProjectClick(project.id)}
      style={{ marginBottom: "20px", cursor: "pointer" }}
    >
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2">
          Overall Progress: {project.progress}%
        </Typography>
        <LinearProgress variant="determinate" value={project.progress} />
        <Typography variant="body2">
          Last Task Completed: {project.lastTaskCompleted}
        </Typography>
        <Typography variant="body2">Next Task: {project.nextTask}</Typography>
      </CardContent>
    </Card>
  );
};

const ProjectsList = ({ projects, onProjectClick }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
