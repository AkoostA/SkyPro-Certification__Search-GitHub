import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: [],
  filter: true,
  totalCount: 0,
  userSearch: "",
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
    isFilterUpdate: (state) => {
      state.filter = !state.filter;
    },
    totalCountUpdate: (state, actions) => {
      state.totalCount = actions.payload;
    },
    userSearchUpdate: (state, actions) => {
      state.userSearch = actions.payload;
    },
  },
});

export const { userUpdate, usersUpdate, isFilterUpdate, totalCountUpdate, userSearchUpdate } =
  reducers.actions;
export default reducers;
