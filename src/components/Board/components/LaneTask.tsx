import { Task } from "@/types/tasks";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import { FC } from "react";

export const LaneTask: FC<{ task: Task }> = ({ task }) => {
  return (
    <Box
      p={1}
      borderRadius={1}
      width="100%"
      flex="0 1 auto"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: `2px solid transparent`,
        cursor: "pointer",
        ":hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: `2px solid ${teal[500]}`,
        },
      }}
    >
      {task.title}
    </Box>
  );
};
