import { axiosInstance } from "./instance";

export const authAPI = {
  login: (email?: string, password?: string) =>
    axiosInstance.post("/auth/login", { email, password }),
  logout: () => axiosInstance.get("/auth/logout"),
  verify: () => axiosInstance.get("/auth/verify"),
};
