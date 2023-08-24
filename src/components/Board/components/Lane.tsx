import { Status } from "@/types/status";
import { Task } from "@/types/tasks";
import { Box } from "@mui/material";
import { FC } from "react";
import { LaneTask } from "./LaneTask";

export const Lane: FC<{ status: Status; tasks: Task[] }> = ({
  status,
  tasks,
}) => {
  return (
    <Box display="flex" flexDirection="column" flex="1 1 0">
      <h2>{status?.name}</h2>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100%"
        mt={1.5}
        p={1}
        borderRadius={2}
        gap={1}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.07)",
          },
        }}
      >
        {tasks.map((task) => (
          <LaneTask key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  );
};
