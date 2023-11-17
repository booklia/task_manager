import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../store/data";

const initialState = {
  projectasdf1: {
    id: "projectasdf1",
    name: "projectasdf",
    columns: {
      columnasdf1: {
        id: "columnasdf1",
        color: "#ff0000",
        name: "todo",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
      columnasdf2: {
        id: "columnasdf2",
        color: "#00ff00",
        name: "doing",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
      columnasdf3: {
        id: "columnasdf3",
        color: "#0000ff",
        name: "done",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
    },
  },
  projectasdf2: {
    id: "projectasdf2",
    name: "projectasdf222",
    columns: {
      columnasdf1: {
        id: "columnasdf1",
        color: "#00f0f0",
        name: "todo",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
      columnasdf2: {
        id: "columnasdf2",
        color: "#f0f000",
        name: "doing",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
      columnasdf3: {
        id: "columnasdf3",
        color: "#f000f0",
        name: "done",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
    },
  },
  projectasdf3: {
    id: "projectasdf3",
    name: "projectasdf333",
    columns: {
      columnasdf1: {
        id: "columnasdf1",
        color: "#ff00ff",
        name: "todo",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
      columnasdf2: {
        id: "columnasdf2",
        color: "#ffff00",
        name: "doing",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
      columnasdf3: {
        id: "columnasdf3",
        color: "#00f0ff",
        name: "done",
        tasks: {
          asdf1: {
            id: "asdf1",
            header: "task 1",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf2: {
            id: "asdf2",
            header: "task 2",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
          asdf3: {
            id: "asdf3",
            header: "task 3",
            description: "xzxcvasdfqwer",
            subtasks: [
              { name: "drink", status: false },
              { name: "drink", status: false },
              { name: "drink", status: false },
            ],
          },
        },
      },
    },
  },
};
const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: { payload: Project; type: string }) => {
      return { ...state, [action.payload.id]: action.payload };
    },
  },
});

const { actions, reducer } = ProjectsSlice;

export const { addProject } = actions;
export default reducer;
