import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const NotesSection = ({ taskId, onAddNote }) => {
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    onAddNote({ taskId, note });
    setNote("");
  };

  return (
    <div>
      <TextField
        label="Add a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        fullWidth
        multiline
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddNote}
        style={{ marginTop: "10px" }}
      >
        Add Note
      </Button>
    </div>
  );
};

export default NotesSection;
