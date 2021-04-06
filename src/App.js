import React from "react";

const Message = (props) => {
  return <div className="message">{props.message}</div>;
};

const Messages = (props) => {
  return (
    <div className="messages">
      {props.messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </div>
  );
};

const ChatBox = () => {
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const hadleSubmit = (event) => {
    event.preventDefault();
    setMessages((msgs) => [...msgs, message]);
    setMessage("");
  };

  return (
    <>
      <Messages messages={messages} />
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="Chat message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button>Send</button>
      </form>
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="title">Chat App</div>
      <ChatBox />
    </>
  );
};

export default App;
