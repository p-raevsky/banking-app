import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./balance.module.scss";
import sprite from "../../../assets/img/sprite.svg";
import { Colors } from "../../../const";

import { setCurrentAccount } from "../../../store/action";
import { getBalance } from "../../../utils";
import { useDispatch } from "react-redux";

function Balance({ currentAccount, accounts }) {
  const dispatch = useDispatch();

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
    <div className={styles.balance}>
      <h3 className={classNames(styles.card_title, styles.card_title_balance)}>
        Balance
      </h3>

      <div className={styles.balance_row}>
        <p className={styles.balance_value}>{currentAccount.balance}</p>

        <Link to={"#"} className={styles.balance_link}>
          <svg width="29" height="28" fill={Colors.ROSE}>
            <use xlinkHref={`${sprite}#piggy_bank_solid`}></use>
          </svg>

          <span>Top up</span>
        </Link>
      </div>
    </div>
  );
}

Balance.propTypes = {
  currentAccount: PropTypes.object,
  accounts: PropTypes.array,
};

export default Balance;
