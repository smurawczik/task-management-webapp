import { ProjectsState } from "@/store/projects/projects.types";
import { axiosInstance } from "./instance";

export const projectsAPI = {
  getProjects: () => axiosInstance.get<ProjectsState["projects"]>("/projects"),
};
