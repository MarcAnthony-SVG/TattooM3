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

  return (
    <Layout>
      <div className="support-container">
        <Modal show={showModal} hide={handleClose}></Modal>
        <button
          style={{ position: 'absolute', zIndex: '1' }}
          onClick={() => setModal(!showModal)}
        >
          Click
        </button>
      </div>
      <style jsx>{`
        .support-container {
          height: 90.5vh;
          width: auto;
          border: 1px solid red;
        }
      `}</style>
    </Layout>
  );
};
export default Support;
