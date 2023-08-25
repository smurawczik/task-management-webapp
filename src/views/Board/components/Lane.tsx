import { Status } from "@/types/status";
import { Task } from "@/types/tasks";
import { Box } from "@mui/material";
import { FC } from "react";
import { LaneTask } from "./LaneTask";
import { Droppable } from "react-beautiful-dnd";

export const Lane: FC<{ status: Status; tasks: Task[] }> = ({
  status,
  tasks,
}) => {
  return (
    <Droppable droppableId={status.name}>
      {(provided) => (
        <Box
          display="flex"
          flexDirection="column"
          flex="1 1 0"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
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
            {tasks.map((task, index) => (
              <LaneTask key={task.id} task={task} index={index} />
            ))}
          </Box>
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};
