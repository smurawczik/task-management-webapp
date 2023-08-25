import { projectsAPI } from "@/api/projects";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
  const response = await projectsAPI.getProjects();
  return response.data;
});

export const projectThunks = {
  fetchProjects,
};
