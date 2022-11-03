import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import i18next from 'i18next';

function ForgetPasswordModal(props) {
  const { t } = useTranslation();

  const handleLogin = () => {
    props.setModalShowResetPasswords(true);
    props.setModalShowForgetPasswords(false);
  };
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
                <h1 className="primary_heading">
                  {i18next.t('forgotpassword_modal_head')}
                </h1>
                <h5 className="after_form_heading_content">
                  {i18next.t('forgotpassword_modal_para')}
                </h5>
                <Form className="hk_custom_style">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder={t('forgotpassword_modal_email')}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Email
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    onClick={handleLogin}
                    className="primary hk_btn_with_bg_theme w-100 cheap_yellow"
                  >
                    {i18next.t('forgotpassword_modal_nextbtn')}
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

export default ForgetPasswordModal;
