import React from "react";
import Row from "react-bootstrap/Row";
import GameCard1 from "../../../assets/img/gamecard1.png";
import GameCard2 from "../../../assets/img/gamecard2.png";
import GameCard3 from "../../../assets/img/gamecard3.png";
import GameCard4 from "../../../assets/img/gamecard4.png";
import GamingCard from "./GamingCard";

import AvatarBadgeOne from "../../../assets/img/badge_brawn.svg";
import AvatarBadgeTwo from "../../../assets/img/card_badge3.png";
import AvatarBadgeThree from "../../../assets/img/classesyellow.png";
import AvatarBadgeFour from "../../../assets/img/classespurple.png";

export const gaming = [
  {
    id: 1,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard1,
    CardBadge:AvatarBadgeOne
  },
  {
    id: 2,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard2,
    CardBadge:AvatarBadgeTwo
  },
  {
    id: 3,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard3,
    CardBadge:AvatarBadgeThree
  },
  {
    id: 4,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard4,
    CardBadge:AvatarBadgeFour
  },
];

const GamingCards = () => {
  return (
    <div className="cards_main game_cards">
      <Row className="even_odd_border">
        {gaming.map((game) => (
          <GamingCard key={game.id} game={game} />
        ))}
      </Row>
    </div>
  );
};

export default GamingCards;
