import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatPage from '../../components/chat-page';
import { createMessage } from '../../actions/message';

const mapStateToProps = state => {
  console.log(state);
  return {
    messages: state.messages.data,
    user: state.auth,
    literals: state.i18nReducer.literals.header,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
