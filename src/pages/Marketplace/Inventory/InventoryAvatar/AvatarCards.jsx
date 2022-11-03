import React from "react";
import Row from "react-bootstrap/Row";
import AvatarCard from "./AvatarCard";
import AvatarOne from "../../../../assets/img/avtar1.png";
import AvatarTwo from "../../../../assets/img/avtar2.png";
import BadgeOne from "../../../../assets/img/card_badge1.png";
import BadgeTwo from "../../../../assets/img/card_badge2.png";
import BadgeThree from "../../../../assets/img/card_badge3.png";
import BadgeFour from "../../../../assets/img/badge_brawn.svg";


export const avatars = [
  {
    id: 1,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
    CardBadge:BadgeOne
  },
  {
    id: 2,
    name: "Haseeb the Military Man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarTwo,
    CardBadge:BadgeTwo
  },
  {
    id: 3,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
    CardBadge:BadgeThree
  },
  {
    id: 4,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
    CardBadge:BadgeFour
  },
];

const AvatarCards = () => {
  return (
    <div className="cards_main">
      <Row className="even_odd_border">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} />
        ))}
      </Row>
    </div>
  );
};

export default AvatarCards;
