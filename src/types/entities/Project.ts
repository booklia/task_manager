import { Column } from "./Column";

type Project = {
  id: number;
  name: string;
  columns: Column[];
};

export { Project };
