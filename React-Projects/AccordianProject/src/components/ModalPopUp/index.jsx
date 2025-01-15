import React, { useState } from "react";
import Modal from "./modal";
import './style.css'
function ModalPopUp() {
  const [btnClicked, setBtnClicked] = useState(false);
 function onClose(){
  setBtnClicked(false)
 }
  return (
    <div>
      <button className="hello" onClick={() => setBtnClicked(true)}>
        Pop Up A Modal
      </button>
      <div className="display-Modal">
        {btnClicked && (
          <Modal
            hello={onClose}
            header={<div>Costomized Header</div>}
            footer={<div>This is Our Costomized Footer</div>}
            body={<div>This is our Costomized Body</div>}
          />
        )}
      </div>
    </div>
  );
}

export default ModalPopUp;
