import { AppDialog } from "@/components/AppDialog";
import { useAppDispatch } from "@/store/hooks";
import { projectThunks } from "@/store/projects/projects.thunks";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FC, useCallback, useState } from "react";

export const CreateProjectDialog: FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();

  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const onCreate = useCallback(async () => {
    await dispatch(projectThunks.createProject(project));
    await dispatch(projectThunks.fetchProjects());

    onClose();
  }, [dispatch, onClose, project]);

  return (
    <AppDialog open={open} onClose={onClose}>
      <DialogTitle sx={{ pb: 1 }}>New Project:</DialogTitle>
      <DialogContent sx={{ py: 2 }}>
        <TextField
          size="small"
          value={project["name"]}
          onChange={(e) => {
            setProject((previousProject) => ({
              ...previousProject,
              name: e.target.value,
            }));
          }}
          label="Name"
          fullWidth
          sx={{ mb: 2, mt: 1 }}
        />
        <TextField
          size="small"
          value={project["description"]}
          onChange={(e) => {
            setProject((previousProject) => ({
              ...previousProject,
              description: e.target.value,
            }));
          }}
          label="Description"
          fullWidth
          multiline
          rows={4}
        />
      </DialogContent>

      <DialogActions sx={{ pb: 2, pr: 3 }}>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" disableElevation onClick={onCreate}>
          Create
        </Button>
      </DialogActions>
    </AppDialog>
  );
};
