import { connect } from 'react-redux';

import AppComponent from '../components';

const mapStateToProps = state => ({
  literals: state.i18nReducer.literals,
});

export default connect(mapStateToProps)(AppComponent);
