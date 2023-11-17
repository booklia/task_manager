import { configureStore } from '@reduxjs/toolkit'
import currentProjectReducer from "../reducers/currentProjectReducer";
import projectsReducer from "../reducers/projectsReducer";


const store = configureStore({
    reducer: {
        currentProject: currentProjectReducer,
        projects: projectsReducer,
    },
})

export default store