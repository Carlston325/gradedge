import React from "react";

function Alert(props) {
  const message = props.message;
  const display = props.display || "none";

  return (
    <div id="alert-message" style={{ display: display }}>
      <button onClick={props.closeAlert} style={{ color: "red" }}>
        X
      </button>
      <h1>Something went wrong</h1>
      <p>{message}</p>
    </div>
  );
}

export default Alert;
