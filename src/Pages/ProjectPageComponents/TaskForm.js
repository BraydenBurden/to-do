import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const TaskForm = ({ onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskType, setTaskType] = useState("basic");

  const handleSave = () => {
    const newTask = {
      name: taskName,
      dueDate: taskDueDate,
      type: taskType,
    };
    onSave(newTask);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TextField
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Task Due Date"
        type="date"
        value={taskDueDate}
        onChange={(e) => setTaskDueDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Task Type</InputLabel>
        <Select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
          <MenuItem value="basic">Basic Task</MenuItem>
          <MenuItem value="advanced">Advanced Task</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Task
      </Button>
    </form>
  );
};

export default TaskForm;
