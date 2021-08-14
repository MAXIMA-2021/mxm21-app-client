import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as State from "../views/state";

const StateRouters = () => {
  return (
    <Switch>
      <Route path="/state" exact component={State.StateSchedule} />
      <Route path="/state/lists" component={State.StateLists} />
      <Route path="/state/*" render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default StateRouters;
