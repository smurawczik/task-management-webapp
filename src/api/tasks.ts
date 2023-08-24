import { Task } from "@/types/tasks";
import { axiosInstance } from "./instance";

export const taskAPI = {
  getTasks: () => axiosInstance.get<Task[]>("/tasks"),
};
