import React, { Component, useState } from "react";
import { Image, Button, Form, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../styles/profileregisterstyle.css";
export function ModalConfirmRegister(props) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={() => props.onClose()}
        dialogClassName="modal-60w">
        <Modal.Body>
          <p className="register-submit-modal-title">Are You Sure</p>
          <p className="register-submit-modal-body">Please check your data. By clicking save, all the data can’t be edited anymore.</p>
          <Row>
          <Col>
          <Button
            onClick={() => props.onClose()}
            className="submit-btn-cancel"
            style={{ aspectRatio: "0", justifyContent: "center", height: "6vh", width: "100%" }}
            type="submit">
            {"Edit"}
          </Button>
          </Col>
          <Col>
          <Button
            onClick={() => props.onSave()}
            className="submit-btn"
            style={{ aspectRatio: "0", justifyContent: "center", height: "6vh", width: "100%" }}
            type="submit">
            {"Save"}
          </Button>
          </Col>
         
       
          </Row>
         
        </Modal.Body>
      </Modal>
    </>
  );
}
