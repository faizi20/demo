import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import Badge from "../../../assets/img/class.png";
import PriceIcon from "../../../assets/img/price_icon.png";
import { nftBuyModalSelectors } from "../../../store/nft/selectors/nftSelectors";
import avtar1 from "../../../assets/img/avtar1.png";

function PutOnMarketModal(props) {
  const buyNftModal = useSelector(nftBuyModalSelectors);

  const handleOwnerRentModal = () => {
    props.setPutOnMarketCongrats(true);
    props.setPutOnMarket(false);
  };

  const handleClose = () => props.setPutOnMarket(false);

  useEffect(() => {});
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal with_control_af"
    >
      <Modal.Header closeButton>
        <div className="title_image_modal">
          <img src={avtar1} alt="Character" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <h1 className="primary_heading">Are you sure want to proceed ?</h1>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="char_details_modal">
            <p className="primary_paragraph">RENTAL TYPE</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <h5>Fixed Rent</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="char_details_modal">
            <p className="primary_paragraph">PRICE</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <img src={PriceIcon} alt="icon-price" />
              </div>
              <div className="char_points">
                <Card.Text className="card_price">
                  100.35
                  <span>150 USDT</span>
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="char_details_modal">
            <p className="primary_paragraph">TIME</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <Card.Text className="card_price">30 Days</Card.Text>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="char_details_modal">
            <p className="primary_paragraph">EARNING %</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <Card.Text className="card_price">4.72%</Card.Text>
              </div>
            </div>
          </div>
        </div>
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
            YES
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default PutOnMarketModal;
