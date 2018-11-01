import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../components/sign-in';
import RestaurantPage from '../containers/restaurant-page';
import SomePage from '../containers/some-page';

import Router from './router';

const routers = [
  {
    exact: true,
    path: '/',
    component: SignIn,
    withHeader: false,
  },
  {
    exact: true,
    path: '/res',
    component: RestaurantPage,
    withHeader: true,
  },
  {
    exact: true,
    path: '/some',
    component: SomePage,
    withHeader: true,
  },
];

export default () => (
  <Switch>
    {routers.map(el => (
      <Router key={el.path} {...el} />
    ))}
  </Switch>
);
