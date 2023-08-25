import { useAppDispatch } from "@/store/hooks";
import { projectThunks } from "@/store/projects/projects.thunks";
import { useCallback, useEffect } from "react";

export const useProjects = () => {
  const dispatch = useAppDispatch();

  const getProjects = useCallback(async () => {
    dispatch(projectThunks.fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);
};
