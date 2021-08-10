import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Home from "../views/home";
import { AnimatePresence } from "framer-motion";

const HomeRouters = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/home" exact component={Home.HomeCover} />
              <Route path="/home/welcome" component={Home.HomeWelcome} />
              <Route path="/home/enter" component={Home.HomePintu} />
              <Route path="/home/category" component={Home.HomeCategory} />
              <Route
                path="/home/organisator-list/:homeChapter"
                component={Home.HomeOrganisatorList}
              />
              <Route
                path="/home/organisator-detail/:searchKey"
                component={Home.HomeOrganisatorDetail}
              />
              <Route path="/home/twibbon" component={Home.HomeTwibbon} />
              <Route path="/home/zeppelin" component={Home.HomeZeppelin} />
              <Route path="/home/finish" component={Home.HomeFinish} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default HomeRouters;
