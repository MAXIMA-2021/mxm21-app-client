import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Auth from './views/auth';
import Home from './views/Home';
import { AnimatePresence } from "framer-motion"

export default function AppRouter() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path='/' exact component={Home} />
              <Route path='/masuk' exact component={Auth.Login} />
              <Route path='/daftar' exact component={Auth.RegisterMaba} />
              <Route path='/' component={Home} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  )
}