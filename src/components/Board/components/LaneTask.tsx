import { Task } from "@/types/tasks";
import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

export const LaneTask: FC<{ task: Task; index: number }> = ({
  task,
  index,
}) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Box
          p={1}
          borderRadius={1}
          width="100%"
          flex="0 1 auto"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: `2px solid transparent`,
            cursor: "pointer",
            userSelect: "none",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: `2px solid ${teal[500]}`,
            },
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.title}
        </Box>
      )}
    </Draggable>
  );
};
