import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Accounts from "../../elements/accounts/accounts";
import styles from "./send-money-page.module.scss";
import sprite from "../../../assets/img/sprite.svg";

function SendMoneyPage({ match: { path } }) {
  console.log("SendMoneyPage", path);
  return (
    <div className={styles.send_money_page}>
      <h1 className="visually-hidden">Send money page</h1>
      <div className={styles.first_column}>
        <h2 className={styles.title}>Send Money From:</h2>
        <Accounts />
      </div>
      <section className={styles.second_column}>
        <Link to={"#"} className={styles.send_money_link}>
          <svg width="15" height="17" fill="#FD3A6C">
            <use xlinkHref={`${sprite}#send`}></use>
          </svg>
          <span>Send Money</span>
        </Link>
      </section>
    </div>
  );
}

SendMoneyPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
};

export default SendMoneyPage;
