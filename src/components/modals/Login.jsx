import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from '../forms/LoginForm';
function Login({show,handleClose}) {


  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title className='text-center text-secondary ms-5'>  <div>Site-Administrator</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body><LoginForm/></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default  Login;

