import React from "react";
import { Link } from "react-router-dom";
import styles from "./send-money-page.module.scss";

import { AppRoute } from "../../../const";

function SendMoneyPage() {
  return (
    <div className={styles.div}>
      <Link to={AppRoute.ROOT}>
        <h1>Send money page</h1>
      </Link>
    </div>
  );
}

export default SendMoneyPage;
