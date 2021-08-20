import React from "react";
import { Link } from "react-router-dom";
import styles from "./home-page.module.scss";

import { AppRoute } from "../../../const";

function HomePage() {
  return (
    <div className={styles.home_page}>
      <Link to={AppRoute.SEND_MONEY_PAGE}>
        <h1>Home page</h1>
      </Link>
    </div>
  );
}

export default HomePage;
