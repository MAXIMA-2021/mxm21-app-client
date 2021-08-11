import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Home from "../views/home";

const HomeRouters = () => {
  return (
    <Switch>
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
      <Route path="/home/*" render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default HomeRouters;
