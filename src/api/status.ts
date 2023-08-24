import { Status } from "@/types/status";
import { axiosInstance } from "./instance";

export const statusesAPI = {
  statuses: () => axiosInstance.get<Status[]>("/status"),
};
