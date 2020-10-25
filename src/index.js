import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'global.css';

import { HeroLayout, AuthLayout } from 'layout';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/hero" render={props => <HeroLayout {...props} />} />
       <Redirect from="/" to="/hero/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
