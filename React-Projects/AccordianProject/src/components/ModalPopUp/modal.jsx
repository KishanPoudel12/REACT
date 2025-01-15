import React from "react";
import './style.css'
function Modal({hello, id, header, footer, body }) {
  return (
    <div id={id || "Modal"} className="Modal">
      <div className="content">
        <div className="header">
          <span
            onClick={hello}
            className="close-modal-icon"
          >
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? body : <div>This is our Modal Body</div>}
        </div>
        <div className="footer">
          {footer ? footer : <div> This is our Footer</div>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
