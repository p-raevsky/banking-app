import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useHistory } from "react-router";

import styles from "./header.module.scss";
import { AppRoute, Colors } from "../../../const";
import { NavItems } from "../../../settings";

import logo from "../../../assets/img/logo.svg";
import sprite from "../../../assets/img/sprite.svg";

function Header() {
  const history = useHistory();
  const currentPath = history.location.pathname;

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
            <Fragment key={item.name}>
              <li
                className={classNames(
                  styles.nav_item,
                  currentPath === item.path && styles.nav_item_active
                )}
              >
                <Link
                  to={item.path}
                  className={classNames(
                    styles.link,
                    styles[item.className],
                    currentPath === item.path && styles.link_active
                  )}
                >
                  <svg width="15" height="16" fill={Colors.BLACK}>
                    <use xlinkHref={`${sprite}#${item.svgId}`}></use>
                  </svg>

                  <span>{item.name}</span>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>

        <Link to={"#"} className={classNames(styles.link, styles.link_profile)}>
          {currentPath === AppRoute.ROOT ? "Profile" : "Setting"}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
