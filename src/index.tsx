import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomeScreen from "./screen/views/HomeScreen/HomeScreen";

import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

export default class BitHyveWalletWeb extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={HomeScreen} exact />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
