import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class ChatPage extends Component {
	static propTypes = {
		messages: PropTypes.array,
		user: PropTypes.object,
		destroyMessage: PropTypes.func,
		createMessage: PropTypes.func,
	};

	state = {
		text: '',
	};

	handleChange = e => this.setState({ text: e.target.value });

	handleSubmit = () => {
		const { text } = this.state;
		const { user, createMessage } = this.props;

		createMessage({ message: text, uid: user.uid });
	};

	render() {
		const { text } = this.state;
		const { messages, user, destroyMessage } = this.props;
		return (
			<div className="chat-block">
				<div className="chat-block__message-area">
					{messages.filter(el => el.content).map(el => (
						<div
							key={el.messageId}
							className={
								el.uid === user.uid ? 'chat-block__message chat-block__message--self' : 'chat-block__message'
							}>
							<div
								className={
									el.uid !== user.uid
										? 'chat-block__message-time chat-block__message-time--self'
										: 'chat-block__message-time'
								}>
								{moment(el.timeStamp).format('HH:mm')}
							</div>
							{el.content}{' '}
							{el.uid === user.uid && (
								<span onClick={destroyMessage.bind(null, el.messageId)} className="chat-block__remove-button">
									x
								</span>
							)}
						</div>
					))}
				</div>
				<div className="chat-block__input-area">
					<input
						onChange={this.handleChange}
						placeholder="Say something"
						type="text"
						className="chat-block__input"
					/>
					<button onClick={this.handleSubmit} disabled={text === ''} className="button button--white">
						submit
					</button>
				</div>
			</div>
		);
	}
}
