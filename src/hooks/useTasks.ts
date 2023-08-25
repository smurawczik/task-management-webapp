import { taskAPI } from "@/api/tasks";
import { Task } from "@/types/tasks";
import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await taskAPI.getTasks();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return { tasks };
};
