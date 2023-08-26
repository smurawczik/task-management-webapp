import { useAppSelector } from "@/store/hooks";

export const Project = () => {
  const project = useAppSelector((state) => state.projects.project);
  return (
    <div>
      {project && (
        <>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </>
      )}
    </div>
  );
};
