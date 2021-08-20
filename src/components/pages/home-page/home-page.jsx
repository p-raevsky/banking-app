import React from "react";
import { Link } from "react-router-dom";

import Accounts from "../../elements/accounts/accounts";
import styles from "./home-page.module.scss";

function HomePage() {
  return (
    <div className={styles.home_page}>
      <h1 className={styles.visually_hidden}>
        Home page for managing personal accounts
      </h1>
      <div className={styles.first_column}>
        <h2 className={styles.title}>Your accounts</h2>
        <Accounts />

        <section className={styles.extra_possibilities}>
          <ul>
            <li className={styles.possibilities_item}>
              <Link to={"#"} className={styles.possibility_link}>
                <dl>
                  <dt className={styles.possibility_term}>Request a Card</dt>

                  <dd className={styles.possibility_desc}>
                    Get a debit card for free
                  </dd>
                </dl>
              </Link>
            </li>
            <li className={styles.possibilities_item}>
              <Link to={"#"} className={styles.possibility_link}>
                <dl>
                  <dt className={styles.possibility_term}>
                    Earn £ 25 for free
                  </dt>

                  <dd className={styles.possibility_desc}>Apply for pension</dd>
                </dl>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <section className={styles.account_card}>
        <div className={styles.balance}>
          <h3 className={styles.balance_title}>Balance</h3>
          <div className={styles.balance_row}>
            <p className={styles.balance_value}>£10.00</p>
            <Link to={"#"} className={styles.balance_link}>
              Top up
            </Link>
          </div>
        </div>
        <div className={styles.transaction}>
          <h3 className={styles.transaction_title}>Quick Transaction</h3>
          <Link to={"#"} className={styles.transaction_link}>
            Send Money
          </Link>
          <ul className={styles.recipients_list}>
            <li className={styles.recipient_item}>
              <img
                className={styles.recipient_photo}
                src="https://via.placeholder.com/150x150"
                width="150"
                height="150"
                alt="recipient photo"
              />
              <p className={styles.recipient_name}>Leo W.</p>
            </li>
            <li className={styles.recipient_item}>
              <img
                className={styles.recipient_photo}
                src="https://via.placeholder.com/150x150"
                width="150"
                height="150"
                alt="recipient photo"
              />
              <p className={styles.recipient_name}>Leo W.</p>
            </li>
          </ul>
        </div>
        <div className={styles.details}>
          <div className={styles.details_top}>
            <dl className={styles.details_top_row}>
              <dt className={styles.details_term}>Account Type:</dt>

              <dd className={styles.details_desc}>Personal</dd>
            </dl>
            <dl className={styles.details_bottom_row}>
              <dt className={styles.details_term}>Currency</dt>

              <dd className={styles.details_desc}>
                Euro <span>EUR</span>
              </dd>
            </dl>
          </div>
          <div className={styles.details_bottom}>
            <dl className={styles.details_top_row}>
              <dt className={styles.details_term}>Passive Saving</dt>

              <dd className={styles.details_desc}>
                Enabled <span>20%</span>
              </dd>
            </dl>
            <dl className={styles.details_bottom_row}>
              <dt className={styles.details_term}>Share Account</dt>

              <dd className={styles.details_desc}>
                <ul className={styles.sharing_list}>
                  <li className={styles.sharing_item}>
                    <img
                      className={styles.sharing_photo}
                      src="https://via.placeholder.com/150x150"
                      width="150"
                      height="150"
                      alt="user photo"
                    />
                  </li>
                  <li className={styles.sharing_item}>
                    <img
                      className={styles.sharing_photo}
                      src="https://via.placeholder.com/150x150"
                      width="150"
                      height="150"
                      alt="user photo"
                    />
                  </li>
                  <li className={styles.sharing_item}>
                    <img
                      className={styles.sharing_photo}
                      src="https://via.placeholder.com/150x150"
                      width="150"
                      height="150"
                      alt="user photo"
                    />
                  </li>
                  <li className={styles.sharing_item}>
                    <p className={styles.sharing_photo}>+2</p>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
