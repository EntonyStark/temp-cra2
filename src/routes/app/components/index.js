import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from '../../../components/current-user';
import routers from '../../index';

export default ({ user, signOut, setLang, literals }) => (
	<BrowserRouter>
		<Switch>
			{routers.map((el, i) => {
				if (el.withHeader) {
					return (
						<Fragment key={i}>
							<Header user={user} signOut={signOut} setLang={setLang} literals={literals} />

							<Route key={i} path={el.path} exact={el.exact} render={props => <el.component {...props} />} />
						</Fragment>
					);
				}
				return (
					<Route key={i} path={el.path} exact={el.exact} render={props => <el.component {...props} />} />
				);
			})}
		</Switch>
	</BrowserRouter>
);
