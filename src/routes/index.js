import SignIn from '../containers/sign-in';
import RestaurantPage from '../containers/restaurant-page';
import SomePage from '../containers/some-page';

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
		path: '/profile',
		component: SomePage,
		withHeader: true,
	},
];

export default routers;
