import { ProjectsState } from "@/store/projects/projects.types";
import { axiosInstance } from "./instance";

export const projectsAPI = {
  getProjects: () => axiosInstance.get<ProjectsState["list"]>("/projects"),
  getProject: (id: string) =>
    axiosInstance.get<ProjectsState["project"]>(`/projects/${id}`),
  createProject: (name: string, description: string) =>
    axiosInstance.post("/projects", { name, description }),
};
