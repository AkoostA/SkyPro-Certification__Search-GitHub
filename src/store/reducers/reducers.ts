import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: [],
  filter: true,
  countPage: 1,
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
    isFilterUpdate: (state, actions) => {
      state.filter = actions.payload;
    },
    countPageUpdate: (state, actions) => {
      state.countPage = actions.payload;
    },
    totalCountUpdate: (state, actions) => {
      state.totalCount = actions.payload;
    },
    userSearchUpdate: (state, actions) => {
      state.userSearch = actions.payload;
    },
  },
});

export const {
  userUpdate,
  usersUpdate,
  isFilterUpdate,
  countPageUpdate,
  totalCountUpdate,
  userSearchUpdate,
} = reducers.actions;
export default reducers;
