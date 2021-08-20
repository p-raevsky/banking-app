import React from "react";
import { Link } from "react-router-dom";

import Accounts from "../../elements/accounts/accounts";
import styles from "./send-money-page.module.scss";

function SendMoneyPage() {
  return (
    <div className={styles.send_money_page}>
      <h1 className={styles.visually_hidden}>Send money page</h1>
      <div className={styles.first_column}>
        <h2 className={styles.title}>Send Money From:</h2>
        <Accounts />
      </div>
      <section className={styles.send_money_details}>
        <Link to={"#"} className={styles.send_money_link}>
          Send Money
        </Link>
      </section>
    </div>
  );
}

export default SendMoneyPage;
