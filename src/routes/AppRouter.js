import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

const template = () =>( <p> Hello, World ! </p>);
const AppRouter  = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={template}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;