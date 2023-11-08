type Task = {
  id: string;
  title: string;
  description: string;
  subtasks: Subtask[];
  status: string;
};

type Subtask = {
  title: string;
  status: boolean;
};

export { Task, Subtask };
