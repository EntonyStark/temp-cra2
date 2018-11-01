import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signOut } from '../../actions/auth';
import CurrentUser from '../../components/current-user';

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signOut }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentUser);
