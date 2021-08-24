import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_ACCOUNTS: "data/loadAccounts",
  CURRENT_ACCOUNT: "path/setCurrentAccount",
};

export const loadAccounts = createAction(
  ActionType.LOAD_ACCOUNTS,
  (payload) => ({
    payload,
  })
);

export const setCurrentAccount = createAction(
  ActionType.CURRENT_ACCOUNT,
  (payload) => ({
    payload,
  })
);
