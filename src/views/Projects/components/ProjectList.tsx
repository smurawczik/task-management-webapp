import { useAppSelector } from "@/store/hooks";
import { List, ListItem, ListItemText } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useRouter } from "next/router";

export const ProjectList = () => {
  const router = useRouter();
  const projects = useAppSelector((state) => state.projects.list);

  return (
    <List
      sx={{ border: `1px solid ${teal[300]}`, mt: 2, borderRadius: 2, py: 0 }}
    >
      {projects.map((project) => (
        <ListItem
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            fontSize: ".85rem",
            cursor: "pointer",
            "&:not(:last-child)": {
              borderBottom: `1px solid ${teal[300]}`,
            },
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          onClick={() => {
            router.push(`/projects/${project.id}`);
          }}
          key={project.id}
        >
          {project.name}
        </ListItem>
      ))}
    </List>
  );
};
