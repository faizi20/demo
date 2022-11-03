import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import CardBadge from "../../../assets/img/card_badge1.png";
import PriceIcon from "../../../assets/img/price_icon.png";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "../../../Components/Modals/BuyAssetsModal/BuyAssetsModal";
import { useDispatch } from "react-redux";
import {
  nftDetails,
  nftBuyModalDetails,
} from "../../../store/nft/actions/nftAction";

const AvatarCard = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    points,
    price,
    priceUSDT,
    image,
    CardBadge,
    buttonRentNow,
  } = props.avatar;
  const [modalShow, setModalShow] = useState(false);

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
        CardBadge,
        buttonRentNow,
      })
    );
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
        CardBadge,
      })
    );
  };

  return (
    <Col lg={3} md={6} sm={12}>
      <Card>
        <Card.Img variant="top small_right" src={CardBadge} />
        <Link
          onClick={handleDispatch}
          to={`/market-place/nft-details/${id}`}
          style={{ "text-decoration": "none" }}
        >
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title className="card_title text_limit_custom" title={name}>
            {name}
          </Card.Title>
          <Card.Text className="card_desc">{points}</Card.Text>
          <Card.Text className="card_price">
            <img src={PriceIcon} alt="icon-price" /> {price}
            <span>{priceUSDT} USDT</span>
          </Card.Text>
          {/* <Button className="primary hk_btn_with_bg_theme">BUY NOW</Button> */}

          {buttonRentNow ? (
            <span onClick={buyNftModalHandler}>{buttonRentNow}</span>
          ) : (
            <Button
              className="px-0"
              variant="primary hk_btn_with_bg_theme"
              onClick={buyNftModalHandler}
            >
              BUY NOW
            </Button>
          )}

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AvatarCard;
