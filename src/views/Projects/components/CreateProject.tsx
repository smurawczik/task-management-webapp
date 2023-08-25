import Button from "@mui/material/Button";
import { CreateProjectDialog } from "./CreateProjectDialog";
import { useState } from "react";

export const CreateProject = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="small"
        variant="contained"
        disableElevation
        sx={{ borderRadius: 8 }}
        onClick={() => {
          setOpen(true);
        }}
      >
        Create Project
      </Button>
      <CreateProjectDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
