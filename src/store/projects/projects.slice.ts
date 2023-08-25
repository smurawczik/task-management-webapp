import { createSlice } from "@reduxjs/toolkit";
import { ProjectsState } from "./projects.types";
import { projectThunks } from "./projects.thunks";

const initialState: ProjectsState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(projectThunks.fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(projectThunks.createProject.fulfilled, (state, action) => {
      console.log(action.payload);

      // state.projects.push(action.payload);
    });
  },
});

export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
