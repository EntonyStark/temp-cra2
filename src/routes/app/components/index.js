import React, { Fragment } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Header from '../../../containers/header';
import routers from '../../index';

export default ({ authStatus }) => {
  if (authStatus === 'ANONYMOUS' && window.location.pathname !== '/') {
    return <Redirect to="/" />;
  }
  return (
    <Switch>
      {routers.map((el, i) => {
        if (el.withHeader) {
          return (
            <Fragment key={i}>
              <Header />

              <Route
                key={i}
                path={el.path}
                exact={el.exact}
                render={props => <el.component {...props} />}
              />
            </Fragment>
          );
        }
        return (
          <Route
            key={i}
            path={el.path}
            exact={el.exact}
            render={props => <el.component {...props} />}
          />
        );
      })}
    </Switch>
  );
};
