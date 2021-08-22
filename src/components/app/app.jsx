import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classNames from "classnames";

import { AppRoute } from "../../const";
import "./app.scss";
import styles from "./app.module.scss";

import Header from "../elements/header/header";
import HomePage from "../pages/home-page/home-page";
import SendMoneyPage from "../pages/send-money-page/send-money-page";

function App() {
  return (
    <Router>
      <div className={classNames(styles.layout, styles.layout_send)}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route
              exact
              path={AppRoute.ROOT}
              render={({ match }) => <HomePage match={match} />}
            />
            <Route
              exact
              path={AppRoute.SEND_MONEY_PAGE}
              render={({ match }) => <SendMoneyPage match={match} />}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
