import { useProjects } from "@/hooks/useProjects";
import Box from "@mui/material/Box";
import { ProjectList } from "./ProjectList";
import { CreateProject } from "./CreateProject";

export const Projects = () => {
  useProjects();

  return (
    <Box width="100%" display="flex" flexDirection="column" flexGrow={1}>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <h1>Projects</h1>
        <CreateProject />
      </Box>
      <ProjectList />
    </Box>
  );
};
