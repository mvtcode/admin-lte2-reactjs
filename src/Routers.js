import React from "react";
import { Route } from "react-router-dom";

import Header from "./partials/Header";

import Home from "./components/Home";
import Videos from "./components/Videos";
import Login from "./components/Login";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;