import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { AppRoute, Colors } from "../../../const";

import styles from "./transaction.module.scss";
import recipient1 from "../../../assets/img/recipient-1.jpg";
import recipient2 from "../../../assets/img/recipient-2.jpg";
import sprite from "../../../assets/img/sprite.svg";

function Transaction() {
  return (
    <div className={styles.transaction}>
      <h3
        className={classNames(styles.card_title, styles.card_title_transaction)}
      >
        Quick Transaction
      </h3>

      <div className={styles.transaction_row}>
        <Link to={AppRoute.SEND_MONEY_PAGE} className={styles.transaction_link}>
          <svg width="27" height="30" fill={Colors.ROSE}>
            <use xlinkHref={`${sprite}#send`}></use>
          </svg>

          <p>Send Money</p>
        </Link>

        <ul className={styles.recipients_list}>
          <li className={styles.recipient_item}>
            <Link to={"#"} className={styles.transaction_link}>
              <img
                className={styles.recipient_photo}
                src={recipient1}
                width="70"
                height="70"
                alt="recipient photo"
              />

              <p className={styles.recipient_name}>Leo W.</p>
            </Link>
          </li>

          <li className={styles.recipient_item}>
            <Link to={"#"} className={styles.transaction_link}>
              <img
                className={styles.recipient_photo}
                src={recipient2}
                width="70"
                height="70"
                alt="recipient photo"
              />

              <p className={styles.recipient_name}>Monica L.</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Transaction;
