import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import styles from "./details.module.scss";
import userPhoto1 from "../../../assets/img/user-photo-1.png";
import userPhoto2 from "../../../assets/img/user-photo-2.png";
import userPhoto3 from "../../../assets/img/user-photo-3.png";

import { getCurrentAccount } from "../../../store/selectors";
import { Currencies } from "../../../settings";

function Details() {
  const currentAccount = useSelector(getCurrentAccount);
  const checkedCurrency = currentAccount.type.toUpperCase();

  return (
    <div className={styles.details}>
      <div className={classNames(styles.details_top, styles.details_row)}>
        <dl className={styles.details_top}>
          <dt
            className={classNames(
              styles.details_term,
              styles.details_term_type
            )}
          >
            Account Type:
          </dt>

          <dd className={styles.details_desc}>Personal</dd>
        </dl>

        <dl className={styles.details_bottom}>
          <dt
            className={classNames(
              styles.details_term,
              styles.details_term_currency
            )}
          >
            Currency
          </dt>

          <dd className={styles.details_desc}>
            {`${Currencies[checkedCurrency].fullName} `}
            <span>{checkedCurrency}</span>
          </dd>
        </dl>
      </div>

      <div className={classNames(styles.details_bottom, styles.details_row)}>
        <dl className={styles.details_top}>
          <dt
            className={classNames(
              styles.details_term,
              styles.details_term_saving
            )}
          >
            Passive Saving
          </dt>

          <dd className={styles.details_desc}>
            Enabled <span>20%</span>
          </dd>
        </dl>
        <dl className={styles.details_bottom}>
          <dt
            className={classNames(
              styles.details_term,
              styles.details_term_sharing
            )}
          >
            Share Account
          </dt>

          <dd className={styles.details_desc}>
            <ul className={styles.sharing_list}>
              <li className={styles.sharing_item}>
                <img
                  className={styles.sharing_photo}
                  src={userPhoto1}
                  width="24"
                  height="24"
                  alt="user photo"
                />
              </li>

              <li className={styles.sharing_item}>
                <img
                  className={styles.sharing_photo}
                  src={userPhoto2}
                  width="24"
                  height="24"
                  alt="user photo"
                />
              </li>

              <li className={styles.sharing_item}>
                <img
                  className={styles.sharing_photo}
                  src={userPhoto3}
                  width="24"
                  height="24"
                  alt="user photo"
                />
              </li>

              <li className={styles.sharing_item}>
                <span className={styles.sharing_photo}>+2</span>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default Details;
