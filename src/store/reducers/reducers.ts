import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
};

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state, actions) => {
      state.users = actions.payload;
    },
  },
});

export const { userUpdate } = reducers.actions;
export default reducers;
