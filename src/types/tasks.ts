import { Status } from "./status";

enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}
