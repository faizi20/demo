import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardBadge from "../../assets/img/card_badge2.png";
import PriceIcon from "../../assets/img/price_icon.png";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "../../Components/Modals/DirectRental/DirectRentalModal";
import OwnerRentModalDialog from "../../Components/Modals/OwnerRental/OwnerRentalModal";
import PutOnMarketModal from "../../Components/Modals/PutOnMarket/PutOnMarket";
import PutOnMarketCongratsModal from "../../Components/Modals/PutOnMarketCongrats/PutOnMarketCongratsModal";
import { useDispatch } from "react-redux";
import {
  nftDetails,
  nftBuyModalDetails,
} from "../../store/nft/actions/nftAction";
import i18next from "i18next";

const InventoryCard = (props) => {
  const dispatch = useDispatch();
  const { id, name, points, price, priceUSDT, image } = props.avatar;
  const [modalShow, setModalShow] = useState(false);
  const [ownerRentModal, setOwnerRentModal] = useState(false);
  const [putOnMarket, setPutOnMarket] = useState(false);
  const [putOnMarketCongrats, setPutOnMarketCongrats] = useState(false);

  useEffect(() => {
    if (modalShow) {
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-hidden");
    }
  }, [modalShow]);

  const handleDispatch = (e) => {
    dispatch(
      nftDetails({
        id,
        name,
        points,
        price,
        priceUSDT,
        image,
      })
    );
    console.log(nftDetails);
  };

  const buyNftModalHandler = () => {
    setModalShow(true);
    dispatch(
      nftBuyModalDetails({
        id,
        name,
        points,
        price,
        priceUSDT,
        image,
      })
    );
  };

  return (
    <>
      <Col lg={3} md={6} sm={6} xs={12}>
        <Card>
          <Card.Img variant="top small_right" src={CardBadge} />
          <Link
            onClick={handleDispatch}
            to={`/player-profile/nft-details/${id}`}
            style={{ "text-decoration": "none" }}
          >
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Title className="card_title">{name}</Card.Title>
            <Card.Text className="card_desc">{points}</Card.Text>
            <Card.Text className="card_price">
              <img src={PriceIcon} alt="icon-price" /> {price}
              <span>{priceUSDT} USDT</span>
            </Card.Text>
            {/* <Button className="primary hk_btn_with_bg_theme">BUY NOW</Button> */}
            <Button
              variant="primary hk_btn_with_bg_theme text-uppercase"
              onClick={buyNftModalHandler}
            >
             {i18next.t('put_on_a_market')}
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card.Body>
        </Card>
      </Col>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setPutOnMarket={setPutOnMarket}
        setOwnerRentModal={setOwnerRentModal}
        setModalShow={setModalShow}
      />
      <OwnerRentModalDialog
        show={ownerRentModal}
        onHide={() => setOwnerRentModal(false)}
        setPutOnMarket={setPutOnMarket}
        setOwnerRentModal={setOwnerRentModal}
      />
      <PutOnMarketModal
        show={putOnMarket}
        onHide={() => setPutOnMarket(false)}
        setOwnerRentModal={setOwnerRentModal}
        setPutOnMarket={setPutOnMarket}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
      <PutOnMarketCongratsModal
        show={putOnMarketCongrats}
        onHide={() => setPutOnMarketCongrats(false)}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
      <PutOnMarketCongratsModal
        show={putOnMarketCongrats}
        onHide={() => setPutOnMarketCongrats(false)}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
    </>
  );
};

export default InventoryCard;
