import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardBadge from "../../../../assets/img/card_badge3.png";
import PriceIcon from "../../../../assets/img/price_icon.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  nftDetails,
  nftBuyModalDetails,
} from "../../../../store/nft/actions/nftAction";
import MyVerticallyCenteredModal from "../../../../Components/Modals/BuyAssetsModal/BuyAssetsModal";
import i18next from "i18next";

const ItemCard = (props) => {
  const { id, name, points, price, priceUSDT, image,CardBadge } = props.item;
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();

  const handleDispatch = (e) => {
    dispatch(
      nftDetails({
        id,
        name,
        points,
        price,
        priceUSDT,
        image,
        CardBadge
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
        CardBadge
      })
    );
  };

  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top small_right" src={CardBadge} />
        <Link
          onClick={handleDispatch}
          to={`/market-place/nft-details/${id}`}
          style={{ "text-decoration": "none" }}
        >
          <Card.Img variant="top" src={image} className="game_nft_img" />
        </Link>
        <Card.Body>
          <Card.Title className="card_title text_limit_custom" title={name}>{name}</Card.Title>
          <Card.Text className="card_desc">{points}</Card.Text>
          <Card.Text className="card_price">
            <img src={PriceIcon} alt="icon-price" /> {price}
            <span>{priceUSDT} USDT</span>
          </Card.Text>
          <Button className="px-0"
            variant="primary hk_btn_with_bg_theme"
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
  );
};

export default ItemCard;
