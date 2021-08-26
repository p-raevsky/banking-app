import { createReducer } from "@reduxjs/toolkit";

import { loadAccounts, setCurrentAccount } from "../store/action";

const initialState = {
  accounts: [],
  isDataLoaded: false,
  currentAccount: {
    type: "eur",
    balance: "0.00",
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAccounts, (state, action) => {
      state.isDataLoaded = true;
      state.accounts = action.payload;
    })
    .addCase(setCurrentAccount, (state, action) => {
      state.currentAccount = action.payload;
    });
});
