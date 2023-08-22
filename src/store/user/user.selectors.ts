import { RootState } from "../store";

export const userSelectors = {
  user: (state: RootState) => state.user,
};
