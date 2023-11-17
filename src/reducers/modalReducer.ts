import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  operation: "",
  elementId: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: typeof initialState,
      action: { payload: typeof initialState; type: string }
    ) => action.payload,
    closeModal: (state: typeof initialState, action: { type: string }) =>
      initialState,
  },
});

const { actions, reducer } = modalSlice;

export const { openModal, closeModal } = actions;
export default reducer;
