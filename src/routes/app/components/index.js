import React, { Fragment } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Header from '../../../containers/header';
import routers from '../../index';

export default ({ authStatus }) => {
  const { pathname } = window.location;

  const router = routers.filter(el => el.path === pathname)[0];

  if (authStatus === 'ANONYMOUS' && pathname !== '/') {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      {router && router.withHeader && <Header />}
      <Switch>
        {routers.map((el, i) => (
          <Route
            key={i}
            path={el.path}
            exact={el.exact}
            render={props => <el.component {...props} />}
          />
        ))}
      </Switch>
    </Fragment>
  );
};
