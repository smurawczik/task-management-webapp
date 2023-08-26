import { useAppDispatch } from "@/store/hooks";
import { projectThunks } from "@/store/projects/projects.thunks";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const useProject = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const dispatch = useAppDispatch();

  const getProjects = useCallback(async () => {
    await dispatch(projectThunks.fetchProject({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (id) getProjects();
  }, [getProjects, id]);
};
