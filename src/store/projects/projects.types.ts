export interface Project {
  id: string;
  name: string;
  description: string;
  issues: any[];
  sprints: any[];
  users: any[];
  boards: any[];
}

export interface ProjectsState {
  list: Project[];
  project: Project | undefined | null;
}
