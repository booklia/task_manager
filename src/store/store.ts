import { configureStore } from "@reduxjs/toolkit";
import currentProjectReducer from "../reducers/currentProjectReducer";
import projectsReducer from "../reducers/projectsReducer";
import modalReducer from "../reducers/modalReducer";

const store = configureStore({
  reducer: {
    currentProject: currentProjectReducer,
    projects: projectsReducer,
    modal: modalReducer,
  },
});

export default store;
