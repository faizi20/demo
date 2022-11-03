import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import itemCard1 from "../../../assets/img/item1.png";
import itemCard2 from "../../../assets/img/item2.png";
import itemCard3 from "../../../assets/img/item3.png";
import itemCard4 from "../../../assets/img/item4.png";
import CardBadgeTwo from "../../../assets/img/card_badge2.png";
import CardBadge from "../../../assets/img/card_badge1.png";
import PriceIcon from "../../../assets/img/price_icon.png";
import ItemCard from "./ItemCard";

import AvatarBadgeOne from "../../../assets/img/card_badge2.png";
import AvatarBadgeTwo from "../../../assets/img/classespurple.png";
import AvatarBadgeThree from "../../../assets/img/card_badge1.png";
import AvatarBadgeFour from "../../../assets/img/badge_brawn.svg";

export const items = [
  {
    id: 1,
    name: "Crazy 1 man couch",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: itemCard1,
    CardBadge:AvatarBadgeOne
  },
  {
    id: 2,
    name: "Crazy 1 man couch",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: itemCard2,
    CardBadge:AvatarBadgeTwo
  },
  {
    id: 3,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: itemCard3,
    CardBadge:AvatarBadgeThree
  },
  {
    id: 4,
    name: "Crazy 1 man couch",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: itemCard4,
    CardBadge:AvatarBadgeFour
  },
];

const ItemCards = () => {
  return (
    <div className="cards_main game_cards">
      <Row className="even_odd_border">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default ItemCards;
