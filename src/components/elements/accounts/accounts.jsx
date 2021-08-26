import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./accounts.module.scss";
import sprite from "../../../assets/img/sprite.svg";

import { getCurrentAccount, getAccounts } from "../../../store/selectors";
import { setCurrentAccount } from "../../../store/action";
import { Currencies } from "../../../settings";
import { getBalance } from "../../../utils";

function Accounts() {
  const dispatch = useDispatch();
  const currentAccount = useSelector(getCurrentAccount);
  const accounts = useSelector(getAccounts);

  return (
    <section className={styles.accounts}>
      {accounts.length ? (
        <ul className={styles.currency_list}>
          {accounts.map((account) => (
            <li
              key={account.title}
              data-currency={account.currency}
              className={classNames(
                styles.currency_item,
                account.currency === currentAccount.type &&
                  styles.currency_item_active
              )}
              onClick={(evt) => {
                const currency = evt.currentTarget.dataset.currency;

                dispatch(
                  setCurrentAccount({
                    type: currency,
                    balance: getBalance(currency, accounts),
                  })
                );
              }}
            >
              <dl className={styles.currency}>
                <svg
                  width="28"
                  height="28"
                  fill={Currencies[account.currency.toUpperCase()].styleFill}
                >
                  <use
                    xlinkHref={`${sprite}#currency-${account.currency}`}
                  ></use>
                </svg>

                <dt className={styles.currency_term}>{account.title}</dt>

                <dd className={styles.currency_value}>
                  {Currencies[account.currency.toUpperCase()].currencySign}
                  {Number(account.balance).toFixed(2)}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.warning}>{"You don't have any accounts yet"}</p>
      )}
    </section>
  );
}

export default Accounts;
