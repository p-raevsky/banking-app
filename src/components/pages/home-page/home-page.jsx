import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import { fetchAccounts } from "../../../store/api-actions";
import Accounts from "../../elements/accounts/accounts";
import styles from "./home-page.module.scss";
import recipient1 from "../../../assets/img/recipient-1.jpg";
import recipient2 from "../../../assets/img/recipient-2.jpg";
import userPhoto1 from "../../../assets/img/user-photo-1.png";
import userPhoto2 from "../../../assets/img/user-photo-2.png";
import userPhoto3 from "../../../assets/img/user-photo-3.png";
import sprite from "../../../assets/img/sprite.svg";

function HomePage({ match: { path } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  console.log("HomePage", path);
  return (
    <>
      <h1 className="visually-hidden">
        Home page for managing personal accounts
      </h1>
      <div className={styles.first_column}>
        <div className={styles.wrap}>
          <h2 className={styles.title}>Your accounts</h2>
          <Accounts />
        </div>

        <section className={styles.extra_possibilities}>
          <ul className={styles.possibilities_list}>
            <li className={styles.possibilities_item}>
              <Link to={"#"} className={styles.possibility_link}>
                <dl>
                  <dt className={styles.title}>Request a Card</dt>

                  <dd className={styles.possibility_desc}>
                    Get a debit card for free
                  </dd>
                </dl>
              </Link>
            </li>
            <li className={styles.possibilities_item}>
              <Link to={"#"} className={styles.possibility_link}>
                <dl>
                  <dt className={styles.title}>Earn £ 25 for free</dt>

                  <dd className={styles.possibility_desc}>Apply for pension</dd>
                </dl>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <section className={styles.second_column}>
        <div className={styles.balance}>
          <h3
            className={classNames(styles.card_title, styles.card_title_balance)}
          >
            Balance
          </h3>
          <div className={styles.balance_row}>
            <p className={styles.balance_value}>£10.00</p>
            <Link to={"#"} className={styles.balance_link}>
              <svg width="29" height="28" fill="#FD3A6C">
                <use xlinkHref={`${sprite}#piggy_bank_solid`}></use>
              </svg>
              <span>Top up</span>
            </Link>
          </div>
        </div>
        <div className={styles.transaction}>
          <h3
            className={classNames(
              styles.card_title,
              styles.card_title_transaction
            )}
          >
            Quick Transaction
          </h3>
          <div className={styles.transaction_row}>
            <Link to={"#"} className={styles.transaction_link}>
              <svg width="27" height="30" fill="#FD3A6C">
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
                  <p className={styles.recipient_name}>Leo W.</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
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
                Euro <span>EUR</span>
              </dd>
            </dl>
          </div>
          <div
            className={classNames(styles.details_bottom, styles.details_row)}
          >
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
      </section>
    </>
  );
}

HomePage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
};

export default HomePage;
