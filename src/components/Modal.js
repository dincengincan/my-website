import "./modal.css";

const Modal = ({ children }) => (
  <div className="modal">
    <div className="modalContent">{children}</div>;
  </div>
);

export default Modal;
