import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';

const basePath = (process.env.NODE_ENV === 'production') ? 'spa-github-pages' : '';

const routes = (
  <Route path={`/${basePath}`} mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path={`${basePath}/example`} mapMenuTitle="Example" component={ExampleComponent}>
      <Route path={`${basePath}/two-deep`} mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
