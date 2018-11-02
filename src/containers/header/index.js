import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/current-user';
import { signOut } from '../../actions/auth';
import { setLang } from '../../actions/language';

const mapStateToProps = state => ({
  user: state.auth,
  literals: state.i18nReducer.literals.header,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signOut, setLang }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
