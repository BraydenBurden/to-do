import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const NewProjectForm = ({ onCreateProject }) => {
  const [projectName, setProjectName] = useState("");
  const [team, setTeam] = useState("");

  const handleCreate = () => {
    const newProject = { projectName, team };
    onCreateProject(newProject);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField
        label="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Team (Optional)"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleCreate}>
        Create Project
      </Button>
    </form>
  );
};

export default NewProjectForm;
