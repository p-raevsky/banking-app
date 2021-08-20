import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import { AppRoute } from "../../../const";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.main_nav}>
        <div className={styles.logo}>
          <Link to={AppRoute.ROOT} className={styles.link_logo}>
            <img
              className={styles.img_logo}
              src="https://via.placeholder.com/150x150"
              width="150"
              height="150"
              alt="Banking app logo"
            />
          </Link>
        </div>

        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link to={AppRoute.ROOT} className={styles.link_home}>
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to={AppRoute.SEND_MONEY_PAGE} className={styles.link_send}>
              Send Money
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to={"#"} className={styles.link_top_up}>
              Top Up
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to={"#"} className={styles.link_accounts}>
              Accounts
            </Link>
          </li>
        </ul>

        <Link to={"#"} className={styles.link_profile}>
          Profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
