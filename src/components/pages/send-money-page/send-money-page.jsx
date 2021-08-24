import React from "react";
import { Link } from "react-router-dom";

import Header from "../../elements/header/header";
import Accounts from "../../elements/accounts/accounts";

import styles from "./send-money-page.module.scss";
import sprite from "../../../assets/img/sprite.svg";
import { Colors } from "../../../const";

function SendMoneyPage() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.send_money_page}>
          <h1 className="visually-hidden">Send money page</h1>

          <div className={styles.first_column}>
            <h2 className={styles.title}>Send Money From:</h2>

            <Accounts />
          </div>

          <section className={styles.second_column}>
            <Link to={"#"} className={styles.send_money_link}>
              <svg width="15" height="17" fill={Colors.ROSE}>
                <use xlinkHref={`${sprite}#send`}></use>
              </svg>

              <span>Send Money</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SendMoneyPage;
