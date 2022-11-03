import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import Avatar from "../../../assets/img/modal_character.png";
import Badge from "../../../assets/img/class.png";
import PriceIcon from "../../../assets/img/price_icon.png";
import { nftBuyModalSelectors } from "../../../store/nft/selectors/nftSelectors";

function MyVerticallyCenteredModal(props) {
  const buyNftModal = useSelector(nftBuyModalSelectors);

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
          <img src={buyNftModal.image} alt="Character" />
        </div>
      </Modal.Header>
      <Modal.Body className="list_style">
        <h1 className="primary_heading">{buyNftModal.name}</h1>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="char_details_modal">
            <p className="primary_paragraph">Rarity</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <img src={Badge} alt="badge" />
              </div>
              <div className="char_points">
                <h5>Uncommon</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="char_details_modal">
            <p className="primary_paragraph">Current Price</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <img src={PriceIcon} alt="icon-price" />
              </div>
              <div className="char_points">
                <Card.Text className="card_price">
                  {buyNftModal.price}
                  <span>{buyNftModal.priceUSDT} USDT</span>
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="char_details_modal">
            <p className="primary_paragraph">gas fee</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <img src={PriceIcon} alt="icon-price" />
              </div>
              <div className="char_points">
                <Card.Text className="card_price">
                  {buyNftModal.price}
                  <span>{buyNftModal.priceUSDT} USDT</span>
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="char_details_modal">
            <p className="primary_paragraph">total</p>
          </div>
          <div className="char_details_modal">
            <div className="d-flex align-items-center">
              <div className="char_points">
                <img src={PriceIcon} alt="icon-price" />
              </div>
              <div className="char_points">
                <Card.Text className="card_price">
                  {buyNftModal.price}
                  <span>{buyNftModal.priceUSDT} USDT</span>
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="primary hk_btn_with_bg_theme">CONFIRM</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
