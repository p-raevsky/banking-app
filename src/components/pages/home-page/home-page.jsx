import React from "react";

import Header from "../../elements/header/header";
import Accounts from "../../elements/accounts/accounts";
import Balance from "../../elements/balance/balance";
import Extra from "../../elements/extra/extra";
import Transaction from "../../elements/transaction/transaction";
import Details from "../../elements/details/details";

import styles from "./home-page.module.scss";

function HomePage() {
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

            <Accounts />
          </div>

          <Extra />
        </div>

        <section className={styles.second_column}>
          <Balance />

          <Transaction />

          <Details />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
