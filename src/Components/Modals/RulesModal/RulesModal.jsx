import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function RulesModal(props) {
  const handleLogin = () => {
    props.setModalShowResetPasswords(true);
    props.setModalShowForgetPasswords(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg hk_bottom_border_set rules_modal_parent"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <div className="">
              <div className="login_right_content">
                <Row>
                  <Col md={12}>
                    <div className="border_bottom_custom max_h_scroll rules_desc_padding">
                      <h1 className="primary_heading rules_heading">Rules 1</h1>
                      <p>
                        How to play: After the first domino is set, subsequent
                        players must join a tile from their hand with an open
                        end in the line of play. The ends of the two tiles that
                        are joined must have the same number of pips. If a
                        player is unable to make a play from his hand, he must
                        draw tiles from the boneyard until he draws a playable
                        tile. If a player unable to make a play from his hand
                        and there are no tiles left in the boneyard, the player
                        must skip his turn until he is able to make a play.
                      </p>
                      <p>
                        Scoring if hand is blocked: Each player counts the pips
                        on the remaining tiles in his hand. The player with the
                        lowest number of pips scores the difference between his
                        total and that of each of his opponents. Then, the
                        player with the next-lowest number of pips scores the
                        difference between his total and that of each of his
                        opponents, and so on. Scoring when partners play:
                        Players must play individually, but a common score is
                        kept for partners. When a player dominoes, the number of
                        pips on the tiles remaining in the hand of his partner
                        are subtracted from their score.
                      </p>
                      <p>
                        Scoring: A player is awarded points every time he makes
                        a play that results in the open ends of the tiles in the
                        line of play adding up to a multiple of 5.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="w-100 d-flex justify-content-end play_now_btn_parent">
                      <button
                        type="button"
                        className="px-0 btn btn-primary play_now_btn hk_btn_with_bg_theme shadow-none"
                      >
                        Play Now
                      </button>
                    </div>
                  </Col>
                </Row>

                {/* <h5 className="after_form_heading_content">
                  Enter your email address, and we’ll send you a security PIN
                </h5>
                <Form className="hk_custom_style">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Email
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    onClick={handleLogin}
                    className="primary hk_btn_with_bg_theme w-100 cheap_yellow"
                  >
                    NEXT
                  </Button>
                </Form> */}
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default RulesModal;
