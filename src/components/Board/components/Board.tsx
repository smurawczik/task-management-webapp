import { useStatuses } from "@/hooks/useStatuses";
import { useTasks } from "@/hooks/useTasks";
import Box from "@mui/material/Box";
import { Lane } from "./Lane";

export const Board = () => {
  const { statuses } = useStatuses();
  const { tasks } = useTasks();

  console.log(statuses, tasks);

  return (
    <Box
      width="100%"
      justifyContent="space-between"
      display="flex"
      flexGrow={1}
      gap={2}
    >
      {statuses.map((status) => {
        const tasksByStatus = tasks.filter(
          (task) => task.status.name === status.name
        );
        return <Lane status={status} tasks={tasksByStatus} key={status.id} />;
      })}
    </Box>
  );
};
