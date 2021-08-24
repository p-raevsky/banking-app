// import { loadAccounts } from "./action";
import { APIRoute } from "../const";

export const fetchAccounts = () => (dispatch, _getState, api) =>
  api()
    .get(APIRoute.DATA)
    .then(() => {
      // dispatch(loadAccounts(accounts));
    })
    .catch(() => {});
