import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./header.module.scss";
import { AppRoute, NavItems } from "../../../const";
import logo from "../../../assets/img/logo.svg";
import sprite from "../../../assets/img/sprite.svg";

function Header() {
  const [currentPath] = useState(AppRoute.ROOT);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to={AppRoute.ROOT} className={styles.link_logo}>
            <img
              className={styles.img_logo}
              src={logo}
              width="39"
              height="26"
              alt="Banking app logo"
            />
          </Link>
        </div>

        <ul className={styles.nav_list}>
          {Object.values(NavItems).map((item) => (
            <Fragment key={item.NAME}>
              <li
                className={classNames(
                  styles.nav_item,
                  currentPath === item.PATH && styles.nav_item_active
                )}
              >
                <Link
                  to={item.PATH}
                  className={classNames(
                    styles.link,
                    styles[item.CLASS_NAME],
                    currentPath === item.PATH && styles.link_active
                  )}
                >
                  <svg width="15" height="16" fill="#262626">
                    <use xlinkHref={`${sprite}#${item.SVG_ID}`}></use>
                  </svg>
                  <span>{item.NAME}</span>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>

        <Link to={"#"} className={classNames(styles.link, styles.link_profile)}>
          Profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
