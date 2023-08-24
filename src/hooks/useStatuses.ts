import { statusesAPI } from "@/api/status";
import { useEffect, useState } from "react";

export const useStatuses = () => {
  const [issueStatuses, setIssueStatuses] = useState<Record<string, string>[]>(
    []
  );

  useEffect(() => {
    const fetchIssueStatuses = async () => {
      try {
        const response = await statusesAPI.statuses();
        console.log(response.data);

        setIssueStatuses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIssueStatuses();
  }, []);

  return { statuses: issueStatuses };
};
