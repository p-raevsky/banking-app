import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./accounts.module.scss";
import sprite from "../../../assets/img/sprite.svg";

import { getAccounts, getCurrentAccount } from "../../../store/selectors";
import { fetchAccounts } from "../../../store/api-actions";
import { setCurrentAccount } from "../../../store/action";
import { Currencies } from "../../../settings";

const getBalance = (currencyValue, accountsArray) => {
  const [filteredAccount] = accountsArray.filter(
    ({ currency }) => currency === currencyValue
  );

  return `${
    Currencies[filteredAccount.currency.toUpperCase()].currencySign
  }${Number(filteredAccount.balance).toFixed(2)}`;
};

function Accounts() {
  const accounts = useSelector(getAccounts);
  const currentAccount = useSelector(getCurrentAccount);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAccounts()), []);
  useEffect(
    () =>
      dispatch(
        setCurrentAccount({
          type: currentAccount.type,
          balance: getBalance(currentAccount.type, accounts),
        })
      ),
    []
  );

  return (
    <section className={styles.accounts}>
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
                <use xlinkHref={`${sprite}#currency-${account.currency}`}></use>
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
    </section>
  );
}

export default Accounts;
