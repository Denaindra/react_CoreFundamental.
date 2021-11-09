const Modal = (props) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn-alt" onClick={props.ModalCancle}>Cancle</button>
      <button className="btn" onClick={props.ModalConfirm}>Confirm</button>
    </div>
  );
};

export default Modal;
