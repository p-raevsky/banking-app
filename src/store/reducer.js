import { createReducer } from "@reduxjs/toolkit";

import { loadAccounts } from "../store/action";

const initialState = {
  accounts: [],
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadAccounts, (state, action) => {
    state.isDataLoaded = true;
    state.accounts = action.payload;
  });
});
