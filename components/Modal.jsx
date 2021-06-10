import React, { useState } from 'react';

const Modal = ({ show, hide, user }) => {
  const [showModal, setModal] = React.useState(true);
  if (!show) {
    return null;
  }
  return (
    <div className="modal-container">
      <h1>`user`</h1>
      <footer>
        <button onClick={() => hide(!showModal)}>Close</button>
      </footer>
      <style jsx>{`
        .modal-container {
          position: absolute;
          left: 28vw;
          top: 20vh;
          width: 80vh;
          height: 50vh;
          border: 3px solid black;
          background-color: grey;
        }
        footer {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color: red;
          color: white;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
export default Modal;
