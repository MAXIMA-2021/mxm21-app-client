import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import * as State from "../views/state";

const StateRouters = () => {
  return (
    <>
      <Route path="/state" exact component={State.StateSchedule} />
      <Route path="/state/lists" component={State.StateLists} />
    </>
  );
};

export default StateRouters;
