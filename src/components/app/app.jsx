import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppRoute } from "../../const";

import "./app.scss";

import HomePage from "../pages/home-page/home-page";
import SendMoneyPage from "../pages/send-money-page/send-money-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={() => <HomePage />} />
        <Route
          exact
          path={AppRoute.SEND_MONEY_PAGE}
          render={() => <SendMoneyPage />}
        />
      </Switch>
    </Router>
  );
}

export default App;
