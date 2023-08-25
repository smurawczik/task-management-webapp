import { useAppSelector } from "@/store/hooks";
import { List, ListItem } from "@mui/material";
import { teal } from "@mui/material/colors";

export const ProjectList = () => {
  const projects = useAppSelector((state) => state.projects.projects);

  return (
    <List
      sx={{ border: `1px solid ${teal[300]}`, mt: 2, borderRadius: 2, py: 0 }}
    >
      {projects.map((project) => (
        <ListItem
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            fontSize: ".85rem",
            "&:not(:last-child)": {
              borderBottom: `1px solid ${teal[300]}`,
            },
          }}
          key={project.id}
        >
          {project.name}
        </ListItem>
      ))}
    </List>
  );
};