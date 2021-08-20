import React from "react";
import styles from "./accounts.module.scss";

function Accounts() {
  return (
    <section className={styles.accounts}>
      <ul className={styles.currency_list}>
        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>

        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>

        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>

        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>
      </ul>
    </section>
  );
}

export default Accounts;
