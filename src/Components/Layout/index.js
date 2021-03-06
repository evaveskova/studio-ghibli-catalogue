import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../Pages/Home';
import Film from '../../Pages/Film';

const Layout = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/film/:id" render={props => <Film props={props} />} />

      <Route path="/">
        <Home />
      </Route>

    </Switch>
    <Footer />
  </Router>
);

export default Layout;
