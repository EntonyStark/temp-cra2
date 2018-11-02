import SignIn from '../containers/sign-in';
import RestaurantPage from '../containers/restaurant-page';
import SomePage from '../containers/some-page';
import NotFoundPage from '../components/notFound';

const routers = [
  {
    exact: true,
    path: '/',
    component: SignIn,
  },
  {
    exact: true,
    path: '/res',
    component: RestaurantPage,
    withHeader: true,
  },
  {
    exact: true,
    path: '/profile',
    component: SomePage,
    withHeader: true,
  },
  {
    component: NotFoundPage,
  },
];

export default routers;
