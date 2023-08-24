import { useStatuses } from "@/hooks/useStatuses";
import Box from "@mui/material/Box";
import { FC } from "react";

interface BoardProps {
  issues: Issue[];
}

interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
}

export const Board: FC<BoardProps> = ({ issues }) => {
  const { statuses } = useStatuses();

  return (
    <Box width="100%" justifyContent="space-between" display="flex">
      {statuses.map((status) => (
        <div key={status.id} className="column">
          <h2>{status.name}</h2>
          {issues
            .filter((issue) => issue.status === status.name)
            .map((issue) => (
              <div key={issue.id} className="card">
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
              </div>
            ))}
        </div>
      ))}
    </Box>
  );
};
