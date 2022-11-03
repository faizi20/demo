import React from "react";
import Row from "react-bootstrap/Row";
import GameCard1 from "../../../../assets/img/gamecard1.png";
import GameCard2 from "../../../../assets/img/gamecard2.png";
import GameCard3 from "../../../../assets/img/gamecard3.png";
import GameCard4 from "../../../../assets/img/gamecard4.png";
import SaleCard from "./SaleCard";

import BadgeOne from "../../../../assets/img/card_badge1.png";
import BadgeTwo from "../../../../assets/img/card_badge2.png";
import BadgeThree from "../../../../assets/img/card_badge3.png";
import BadgeFour from "../../../../assets/img/badge_brawn.svg";

export const gaming = [
  {
    id: 1,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard1,
    CardBadge:BadgeOne
  },
  {
    id: 2,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard2,
    CardBadge:BadgeTwo
  },
  {
    id: 3,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard3,
    CardBadge:BadgeThree
  },
  {
    id: 4,
    name: "Small Lawn House",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: GameCard4,
    CardBadge:BadgeFour
  },
];

const SaleCards = () => {
  return (
    <div className="cards_main game_cards">
      <Row className="even_odd_border">
        {gaming.map((game) => (
          <SaleCard key={game.id} game={game} />
        ))}
      </Row>
    </div>
  );
};

export default SaleCards;
