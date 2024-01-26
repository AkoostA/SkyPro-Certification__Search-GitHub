import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: [],
};

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state, actions) => {
      state.user = actions.payload;
    },
    usersUpdate: (state, actions) => {
      state.users = actions.payload;
    },
  },
});

export const { userUpdate, usersUpdate } = reducers.actions;
export default reducers;
