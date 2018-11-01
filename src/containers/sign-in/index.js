import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/auth';
import SignIn from '../../components/sign-in';

const mapStateToProps = state => ({
  statusForAuth: state.auth.status,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
