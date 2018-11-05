import React, { Component } from 'react';

const chat = [
  { id: 1, text: 'ololo' },
  { id: 2, text: 'ololoaad' },
  { id: 3, text: 'ololoccv' },
  { id: 4, text: 'ololo333' },
  { id: 5, text: 'olfdsolo' },
  { id: 6, text: 'ololo231' },
];

export default class ChatPage extends Component {
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
    return (
      <div className="chat-block">
        <div className="chat-block__message-area">
          {chat.map(el => (
            <div className="chat-block__message" key={el.id}>
              {el.text}
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
          <button
            onClick={this.handleSubmit}
            disabled={text === ''}
            className="button button--white"
          >
            submit
          </button>
        </div>
      </div>
    );
  }
}
