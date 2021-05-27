import Layout from '../components/Layout';
import React, { useState } from 'react';
import Modal from '../components/Modal';

const Support = () => {
  const [showModal, setModal] = React.useState(false);

  const handleAddClick = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  const container = {
    height: '90.5vh',
    width: 'auto',
    border: '1px solid red',
  };
  return (
    <Layout>
      <div className="Support" style={container}>
        <Modal show={showModal} hide={handleClose}></Modal>
        <button
          style={{ position: 'absolute', zIndex: '1' }}
          onClick={() => setModal(!showModal)}
        >
          Click
        </button>
      </div>
    </Layout>
  );
};
export default Support;
