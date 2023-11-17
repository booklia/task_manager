import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = "projectasdf1";

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    switchProject: (state: string, action: { payload: string; type: string }) =>
      action.payload,
  },
});

const { actions, reducer } = currentProjectSlice;

export const { switchProject } = actions;
export default reducer;
