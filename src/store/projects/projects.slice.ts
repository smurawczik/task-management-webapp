import { createSlice } from "@reduxjs/toolkit";
import { ProjectsState } from "./projects.types";
import { projectThunks } from "./projects.thunks";

const initialState: ProjectsState = {
  list: [],
  project: undefined,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(projectThunks.fetchProjects.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(projectThunks.fetchProject.fulfilled, (state, action) => {
      state.project = action.payload;
    });
    builder.addCase(projectThunks.fetchProject.rejected, (state, action) => {
      state.project = null;
    });
  },
});

export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
