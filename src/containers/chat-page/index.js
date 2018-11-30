import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatPage from '../../components/chat-page';
import { createMessage, destroyMessage } from '../../actions/message';

const mapStateToProps = state => ({
	messages: state.messages.data,
	user: state.auth,
	literals: state.i18nReducer.literals.header,
});

const mapDispatchToProps = dispatch => bindActionCreators({ createMessage, destroyMessage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChatPage);
