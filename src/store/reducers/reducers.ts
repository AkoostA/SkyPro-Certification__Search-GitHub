import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: [],
  isFilter: true,
  isLoading: false,
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
      sessionStorage.setItem("user", JSON.stringify(actions.payload));
    },
    usersUpdate: (state, actions) => {
      state.users = actions.payload;
      sessionStorage.setItem("users", JSON.stringify(actions.payload));
    },
    isFilterUpdate: (state, actions) => {
      state.isFilter = actions.payload;
      sessionStorage.setItem("isFilter", JSON.stringify(actions.payload));
    },
    isLoadingUpdate: (state, actions) => {
      state.isLoading = actions.payload;
    },
    countPageUpdate: (state, actions) => {
      state.countPage = actions.payload;
      sessionStorage.setItem("countPage", JSON.stringify(actions.payload));
    },
    totalCountUpdate: (state, actions) => {
      state.totalCount = actions.payload;
      sessionStorage.setItem("totalCount", JSON.stringify(actions.payload));
    },
    userSearchUpdate: (state, actions) => {
      state.userSearch = actions.payload;
      sessionStorage.setItem("userSearch", JSON.stringify(actions.payload));
    },
    sessionStorageUpdate: (state) => {
      const user = sessionStorage.getItem("user");
      const users = sessionStorage.getItem("users");
      const isFilter = sessionStorage.getItem("isFilter");
      const countPage = sessionStorage.getItem("countPage");
      const totalCount = sessionStorage.getItem("totalCount");
      const userSearch = sessionStorage.getItem("userSearch");
      if (user) state.user = JSON.parse(user);
      if (users) state.users = JSON.parse(users);
      if (isFilter) state.isFilter = JSON.parse(isFilter);
      if (countPage) state.countPage = JSON.parse(countPage);
      if (totalCount) state.totalCount = JSON.parse(totalCount);
      if (userSearch) state.userSearch = JSON.parse(userSearch);
    },
  },
});

export const {
  userUpdate,
  usersUpdate,
  isFilterUpdate,
  isLoadingUpdate,
  countPageUpdate,
  totalCountUpdate,
  userSearchUpdate,
  sessionStorageUpdate,
} = reducers.actions;
export default reducers;
