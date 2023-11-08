import { Project } from "../entities/Project";
type State = {
  modal: {
    action: string | undefined;
    object: string | undefined;
  };
  projects: string[];
  currentProject: Project;
  projectsCache: {
    [k: string]: Project;
  };
};
