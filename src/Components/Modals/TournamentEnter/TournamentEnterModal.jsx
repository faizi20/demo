import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import PriceIcon from "../../../assets/img/price_icon.png";

function TournamentEnterModal(props) {
  console.log(props);
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
      className="hk_assets_modal modal_light_bg with_control_af enter_tour_head"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <div className="login_right for_single_type_modal entry_modal">
              <div className="login_right_content">
                <h1 className="primary_heading">
                  Are you sure you want to proceed?
                </h1>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="char_details_modal">
                    <p className="primary_paragraph">Tournament</p>
                  </div>
                  <div className="char_details_modal">
                    <div className="d-flex align-items-center">
                      <div className="char_points">
                        <h5>Domino masters</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="char_details_modal">
                    <p className="primary_paragraph">Entrance fee</p>
                  </div>
                  <div className="char_details_modal">
                    <div className="d-flex align-items-center">
                      <div className="char_points">
                        <img src={PriceIcon} alt="icon-price" />
                      </div>
                      <div className="char_points">
                        <Card.Text className="card_price">
                          100.45
                          <span>150 USDT</span>
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="char_details_modal">
                    <p className="primary_paragraph">Gas Fee</p>
                  </div>
                  <div className="char_details_modal">
                    <div className="d-flex align-items-center">
                      <div className="char_points">
                        <img src={PriceIcon} alt="icon-price" />
                      </div>
                      <div className="char_points">
                        <Card.Text className="card_price">
                          5.25
                          <span>7.50 USDT</span>
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="char_details_modal">
                    <p className="primary_paragraph">Total</p>
                  </div>
                  <div className="char_details_modal">
                    <div className="d-flex align-items-center">
                      <div className="char_points">
                        <img src={PriceIcon} alt="icon-price" />
                      </div>
                      <div className="char_points">
                        <Card.Text className="card_price">
                          105.60
                          <span>157.50 USDT</span>
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <Button
                    onClick={handleLogin}
                    className="primary hk_btn_with_bg_theme w-100 for_bg_no_button"
                  >
                    NO
                  </Button>
                  <Button
                    onClick={handleLogin}
                    className="primary hk_btn_with_bg_theme w-100"
                  >
                    YES
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default TournamentEnterModal;
