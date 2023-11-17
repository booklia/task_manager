type ProjectId = string;

type ColumnId = string;

type TaskId = string;

type Subtask = {
  name: string;
  status: boolean;
};

export type Task = {
  id: TaskId;
  header: string;
  description: string;
  subtasks: Subtask[];
};

export type Column = {
  id: ColumnId;
  color: string;
  name: string;
  tasks: {
    [k: TaskId]: Task;
  };
};

export type Project = {
  id: ProjectId;
  name: string;
  columns: {
    [k: ColumnId]: Column;
  };
};

export type Data = {
  projects: {
    [k: string]: Project;
  };
};

export type Store = {
  currentProject: ProjectId;
  projects: {
    [k: ProjectId]: Project;
  };
};
