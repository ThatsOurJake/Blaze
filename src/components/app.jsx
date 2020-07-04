import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initNavigation, setKeyMap } from '@noriginmedia/react-spatial-navigation';

import './styles/index';

import Main from './screens/main';
import AppDrawer from './screens/app-drawer';
import AppLoader from './apps/app-loader';

/**
 * Enter = Select
 * Backspace = Back Btn
 * Up, Down, Left, RIght = Normal Controls
*/

const app = () => {
  initNavigation();

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/drawer" component={AppDrawer} />
          <Route path="/app/:id" component={AppLoader} />
        </Switch>
      </Router>
    </div>
  );
};

export default app;
