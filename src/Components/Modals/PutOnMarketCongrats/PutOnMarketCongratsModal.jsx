import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "../../../assets/img/class.png";
import PriceIcon from "../../../assets/img/price_icon.png";
import { nftBuyModalSelectors } from "../../../store/nft/selectors/nftSelectors";
import avtar1 from "../../../assets/img/avtar1.png";

function PutOnMarketCongratsModal(props) {
  const buyNftModal = useSelector(nftBuyModalSelectors);
  const handleClose = () => props.setPutOnMarketCongrats(false);

  useEffect(() => {});
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal congrats_onmarket_modal with_control_af"
    >
      <Modal.Header closeButton>
        <div className="title_image_modal">
          <img src={avtar1} alt="Character" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <h1 className="primary_heading">Captain the military man</h1>
        <div className="d-flex align-items-center justify-content-between mb-0">
          <div className="char_details_modal">
            <h1 className="primary_heading m-0 w-100">Congratulations!</h1>
            <span className="m-0">
              Your items has been Placed in Marketplace
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="px-1 d-flex align-items-center mt-0 w-100 rent_modal_footer">
          <Button
            variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border"
            onClick={handleClose}
          >
            CANCEL
          </Button>
          <Link to="/marketplace" className="primary hk_btn_with_bg_theme">
            GO TO MARKET
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default PutOnMarketCongratsModal;
