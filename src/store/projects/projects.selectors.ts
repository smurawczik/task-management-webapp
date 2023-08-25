import { RootState } from "../store";

export const projectsSelectors = {
  projects: (state: RootState) => state.projects,
};
