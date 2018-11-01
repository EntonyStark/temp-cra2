import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signOut } from '../../../actions/auth';
import { setLang } from '../../../actions/language';

import AppComponent from '../components';

const mapStateToProps = state => ({
	user: state.auth,
	literals: state.i18nReducer.literals.header,
});

const mapDispatchToProps = dispatch => bindActionCreators({ signOut, setLang }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AppComponent);
