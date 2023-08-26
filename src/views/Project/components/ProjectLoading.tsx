import { useAppSelector } from "@/store/hooks";
import { Box, CircularProgress } from "@mui/material";
import { teal } from "@mui/material/colors";
import Link from "next/link";

export const ProjectLoading = () => {
  const project = useAppSelector((state) => state.projects.project);

  return (
    <>
      {project === null && (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <h1>Project not found</h1>
          <Link href="/projects" style={{ color: teal[500] }}>
            Back to all projects
          </Link>
        </Box>
      )}
      {project === undefined && (
        <h1>
          Loading <CircularProgress />
        </h1>
      )}
    </>
  );
};
