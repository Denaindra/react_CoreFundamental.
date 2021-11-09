import Backdrops from "../componet/Backdrops";
import Modal from "../componet/Modal";
import React, { useState } from "react";

const Todo = (probs) => {
  const [isOpen, setisOpen] = useState(false);

  function ModalClick() {
    setisOpen(true);
  }

  function ModalCancle() {
    setisOpen(false);
  }

  const { title } = probs;
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="action">
        <button className="btn" onClick={ModalClick}>
          Delete
        </button>
      </div>
      {isOpen && <Modal ModalCancle={ModalCancle} />}
      {isOpen && <Backdrops ModalCancle={ModalCancle} />}
    </div>
  );
};

export default Todo;
