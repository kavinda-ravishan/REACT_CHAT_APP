import ReactDOM from "react-dom";
import React from "react";

const App = () => {
  return <div className="title">Chat App</div>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
