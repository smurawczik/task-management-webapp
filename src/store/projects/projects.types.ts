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
  projects: Project[];
}
