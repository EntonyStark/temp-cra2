import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppComponent from '../components';

const mapStateToProps = state => ({
  literals: state.i18nReducer.literals,
  authStatus: state.auth.status,
});

export default withRouter(connect(mapStateToProps)(AppComponent));
