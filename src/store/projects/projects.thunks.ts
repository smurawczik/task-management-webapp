import { projectsAPI } from "@/api/projects";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
  const response = await projectsAPI.getProjects();
  return response.data;
});

const fetchProject = createAsyncThunk<any, { id: string }>(
  "projects/fetchProject",
  async ({ id }) => {
    const response = await projectsAPI.getProject(id);
    return response.data;
  }
);

const createProject = createAsyncThunk<
  any,
  { name: string; description: string }
>("projects/createProject", async ({ name, description }) => {
  const response = await projectsAPI.createProject(name, description);
  return response.data;
});

export const projectThunks = {
  fetchProject,
  fetchProjects,
  createProject,
};
