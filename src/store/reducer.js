import { createReducer } from "@reduxjs/toolkit";

import { loadAccounts, setCurrentAccount } from "../store/action";

const initialState = {
  accounts: [
    //Змінити на [] в разі вирішення проблеми з СORS
    {
      title: "Euro (EUR)",
      currency: "eur",
      balance: "133.2",
    },
    {
      title: "British Sterling (GBP)",
      currency: "gbp",
      balance: "10",
    },
    {
      title: "US Dollar (USD)",
      currency: "usd",
      balance: "10234.2",
    },
    {
      title: "South Korea Won (KRW)",
      currency: "krw",
      balance: "0",
    },
  ],
  isDataLoaded: true, //Змінити на false в разі вирішення проблеми з СORS
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
