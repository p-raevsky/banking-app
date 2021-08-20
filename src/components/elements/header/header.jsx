import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "../../../const";

function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
        <div className="main-nav__logo">
          <Link to={AppRoute.ROOT} className="main-nav__link-logo">
            <img
              className="main-nav__img-logo"
              src="https://via.placeholder.com/150x150"
              width="150"
              height="150"
              alt="Banking app logo"
            />
          </Link>
        </div>

        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link to={AppRoute.ROOT} className="main-nav__link--home">
              Home
            </Link>
          </li>
          <li className="main-nav__item">
            <Link
              to={AppRoute.SEND_MONEY_PAGE}
              className="main-nav__link--send"
            >
              Send Money
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to={"#"} className="main-nav__link--top-up">
              Top Up
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to={"#"} className="main-nav__link--accounts">
              Accounts
            </Link>
          </li>
        </ul>

        <Link to={"#"} className="main-nav__link-profile">
          Profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
