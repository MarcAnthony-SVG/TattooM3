import React, { useState } from 'react';

const Modal = (props) => {
  const [showModal, setModal] = React.useState(true);
  if (!props.show) {
    return null;
  }
  return (
    <div
      style={{
        position: 'absolute',
        left: '28vw',
        top: '20vh',
        width: '80vh',
        height: '50vh',
        border: '3px solid black',
        backgroundColor: 'grey',
      }}
    >
      <div>
        <h1>`props.user`</h1>
      </div>
      <footer
        style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          backgroundColor: 'red',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <button onClick={() => props.hide(!showModal)}>Close</button>
      </footer>
    </div>
  );
};
export default Modal;
