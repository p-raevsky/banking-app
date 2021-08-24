// import { loadAccounts } from "./action";
import { APIRoute } from "../const";

export const fetchAccounts = () => (dispatch, _getState, api) =>
  api()
    .get(APIRoute.DATA)
    .then((data) => {
      const {
        body: { accounts },
      } = data;
      console.log("Fetch", accounts);
      // dispatch(loadAccounts(accounts));
    })
    .catch(() => {});
