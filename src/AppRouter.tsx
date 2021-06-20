import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Auth from './views/auth';
import Home from './views/Home';

export default function AppRouter() {
  return (
    <Switch>
      <Route path='/masuk' exact component={Auth.Login} />
      <Route path='/daftar' exact component={Auth.RegisterMaba} />
      <Route path='/' exact component={Home} />
    </Switch>
  )
}