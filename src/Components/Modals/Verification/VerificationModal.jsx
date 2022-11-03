import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import VerificationInput from "react-verification-input";

function VerificationModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg hk_bottom_border_set"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <div className="login_right for_single_type_modal">
              <div className="login_right_content">
                <h1 className="primary_heading">Verification Code</h1>
                <h5 className="after_form_heading_content">
                  We have sent you a verification code via your email ID
                </h5>
                <Form className="hk_custom_style">
                  <VerificationInput placeholder="-" />
                  <h5 className="after_form_heading_content text-center mb-0 mt-4">
                    Resend In: 00:20
                  </h5>
                  <Button className="primary hk_btn_with_bg_theme w-100 mt-4">
                    SUBMIT
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default VerificationModal;
