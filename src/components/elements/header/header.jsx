import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "../../../const";

function Header() {
  return (
    <header className="header">
      <nav className="main_nav">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="link_logo">
            <img
              className="img_logo"
              src="https://via.placeholder.com/150x150"
              width="150"
              height="150"
              alt="Banking app logo"
            />
          </Link>
        </div>

        <ul className="nav_list">
          <li className="nav_item">
            <Link to={AppRoute.ROOT} className="link_home">
              Home
            </Link>
          </li>
          <li className="nav_item">
            <Link to={AppRoute.SEND_MONEY_PAGE} className="link_send">
              Send Money
            </Link>
          </li>
          <li className="nav_item">
            <Link to={"#"} className="link_top_up">
              Top Up
            </Link>
          </li>
          <li className="nav_item">
            <Link to={"#"} className="link_accounts">
              Accounts
            </Link>
          </li>
        </ul>

        <Link to={"#"} className="link_profile">
          Profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
