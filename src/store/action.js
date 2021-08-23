import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_ACCOUNTS: "data/loadAccounts",
};

export const loadAccounts = createAction(
  ActionType.LOAD_ACCOUNTS,
  (payload) => ({
    payload,
  })
);
