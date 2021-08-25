import { loadAccounts } from "./action";
import { APIRoute } from "../const";

export const fetchAccounts = () => (dispatch, _getState, api) =>
  api()
    .get(APIRoute.DATA)
    .then(({ body }) => {
      dispatch(loadAccounts(body.accounts));
    })
    .catch(() => {});
