import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as State from "../views/state";
import { AnimatePresence } from "framer-motion";

const StateRouters = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/state" exact component={State.StateSchedule} />
              <Route path="/state/lists" component={State.StateLists} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default StateRouters;
