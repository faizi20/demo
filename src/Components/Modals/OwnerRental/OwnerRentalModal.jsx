import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

import { nftRentDirectModalSelectors } from "../../../store/nft/selectors/nftSelectors";

function OwnerRentModalDialog(props) {
  const nftRentModal = useSelector(nftRentDirectModalSelectors);

  const handleOwnerRentModal = () => {
    props.setPutOnMarket(true);
    props.setOwnerRentModal(false);
  };

  const handleClose = () => props.setOwnerRentModal(false);

  useEffect(() => {});
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal nft_rent_form with_control_af"
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
              <option>Screening Of Owners</option>
              <option>Option1</option>
              <option>Option2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Select>
              <option>Time</option>
              <option>Option1</option>
              <option>Option2</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="px-2 d-flex align-items-center mt-4 w-100 rent_modal_footer">
          <Button
            variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border"
            onClick={handleClose}
          >
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

export default OwnerRentModalDialog;
