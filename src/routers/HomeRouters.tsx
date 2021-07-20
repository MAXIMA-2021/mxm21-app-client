import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Home from "../views/home";

const HomeRouters = () => {
  return (
    <>
      <Route path="/home/home-cover" exact component={Home.HomeCover} />
      <Route path="/home/home-welcome" exact component={Home.HomeWelcome} />
      <Route path="/home/home-pintu" exact component={Home.HomePintu} />
      <Route path="/home/home-category" exact component={Home.HomeCategory} />
      <Route
        path="/home/home-organisator-detail"
        exact
        component={Home.HomeOrganisatorDetail}
      />
      <Route
        path="/home/home-organisator-list"
        exact
        component={Home.HomeOrganisatorList}
      />
      <Route path="/home/home-twibbon" exact component={Home.HomeTwibbon} />
      <Route path="/home/home-zeppelin" exact component={Home.HomeZeppelin} />
      <Route path="/home/home-finish" exact component={Home.HomeFinish} />
    </>
  );
};

export default HomeRouters;
