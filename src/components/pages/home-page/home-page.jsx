import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../elements/header/header";
import Accounts from "../../elements/accounts/accounts";
import Balance from "../../elements/balance/balance";
import Extra from "../../elements/extra/extra";
import Transaction from "../../elements/transaction/transaction";
import Details from "../../elements/details/details";

import LoadWrapper from "../../elements/load-wrapper/load-wrapper";

import {
  getCurrentAccount,
  getAccounts,
  getIsDataLoaded,
} from "../../../store/selectors";
import { fetchAccounts } from "../../../store/api-actions";

import styles from "./home-page.module.scss";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAccounts()), []);

  const accounts = useSelector(getAccounts);
  const currentAccount = useSelector(getCurrentAccount);
  const isDataLoaded = useSelector(getIsDataLoaded);

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <h1 className="visually-hidden">
          Home page for managing personal accounts
        </h1>

        <div className={styles.first_column}>
          <div className={styles.wrap}>
            <h2 className={styles.title}>Your accounts</h2>

            <LoadWrapper isLoaded={isDataLoaded}>
              <Accounts />
            </LoadWrapper>
          </div>

          <Extra />
        </div>

        <section className={styles.second_column}>
          <LoadWrapper isLoaded={isDataLoaded}>
            <Balance currentAccount={currentAccount} accounts={accounts} />
          </LoadWrapper>

          <Transaction />

          <Details />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
