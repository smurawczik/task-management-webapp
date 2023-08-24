import { axiosInstance } from "./instance";

export const statusesAPI = {
  statuses: () => axiosInstance.get<Record<string, string>[]>("/status"),
};
