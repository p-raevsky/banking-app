import React, { useState } from "react";
import classNames from "classnames";

import styles from "./accounts.module.scss";
import sprite from "../../../assets/img/sprite.svg";

function Accounts() {
  const [activeCurrency] = useState("eur");
  return (
    <section className={styles.accounts}>
      <ul className={styles.currency_list}>
        <li
          className={classNames(
            styles.currency_item,
            activeCurrency === "eur" && styles.currency_item_active
          )}
        >
          <dl className={styles.currency}>
            <svg width="28" height="28" fill="#FD3A6C">
              <use xlinkHref={`${sprite}#currency-eur`}></use>
            </svg>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>

        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <svg width="28" height="28" fill="#FD3A6C">
              <use xlinkHref={`${sprite}#currency-eur`}></use>
            </svg>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>

        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <svg width="28" height="28" fill="#FD3A6C">
              <use xlinkHref={`${sprite}#currency-eur`}></use>
            </svg>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>

        <li className={styles.currency_item}>
          <dl className={styles.currency}>
            <svg width="28" height="28" fill="#FD3A6C">
              <use xlinkHref={`${sprite}#currency-eur`}></use>
            </svg>
            <dt className={styles.currency_term}>Euro (EUR)</dt>

            <dd className={styles.currency_value}>€133.20</dd>
          </dl>
        </li>
      </ul>
    </section>
  );
}

export default Accounts;
