import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as State from "../views/state";

const StateRouters = () => {
  return (
    <>
      <Route path="/state" exact component={State.StateSchedule} />
      <Route path="/state/lists" exact component={State.StateLists} />
    </>
  );
};

export default StateRouters;
