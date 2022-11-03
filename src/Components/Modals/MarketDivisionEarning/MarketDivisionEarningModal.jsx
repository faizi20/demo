import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import { nftRentDirectModalSelectors } from "../../../store/nft/selectors/nftSelectors";
import Taunt from "../../../assets/img/taunt.png";

function MarketDivisionEarningModal(props) {
  const nftRentModal = useSelector(nftRentDirectModalSelectors);

  const handleOwnerRentModal = () => {
    props.setOwnerRentModal(true);
    props.setModalShow(false);
  };

  useEffect(() => {});
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal nft_rent_form"
    >
      <Modal.Header closeButton>
        <div className="title_image_modal">
          <img src={nftRentModal.image} alt="Character" />
        </div>
      </Modal.Header>
      <Modal.Body className="px-4 pb-0">
        <h1 className="primary_heading">{nftRentModal.name}</h1>
        <Form>
          <Form.Group className="mb-4">
            <Form.Select>
              <option>Rental</option>
              <option>Option1</option>
              <option>Option2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Select>
              <option>Division of Earningss</option>
              <option>Option1</option>
              <option>Option2</option>
            </Form.Select>
          </Form.Group>
          <InputGroup className="mb-4">
            <InputGroup.Text id="basic-addon1" className="control_icon_coin">
              <img src={Taunt} alt="Taunt-Coin" />
            </InputGroup.Text>
            <Form.Control placeholder="0" className="with_input_group" />
          </InputGroup>
          <Form.Group className="mb-4">
            <Form.Select>
              <option>Time</option>
              <option>Option1</option>
              <option>Option2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control type="text" placeholder="Earning %" />
          </Form.Group>
          <Form.Group className="mb-0">
            <Form.Control type="text" placeholder="Financing Liquidity" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="px-2 d-flex align-items-center mt-4 w-100 rent_modal_footer">
          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
            CANCEL
          </Button>
          <Button
            className="primary hk_btn_with_bg_theme"
            onClick={handleOwnerRentModal}
          >
            PROCEED
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MarketDivisionEarningModal;
