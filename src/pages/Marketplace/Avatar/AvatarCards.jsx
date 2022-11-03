import React from "react";
import Row from "react-bootstrap/Row";
import AvatarCard from "./AvatarCard";
import AvatarOne from "../../../assets/img/avtar1.png";
import AvatarTwo from "../../../assets/img/avtar2.png";
import AvatarBadgeOne from "../../../assets/img/card_badge1.png";
import AvatarBadgeTwo from "../../../assets/img/card_badge2.png";
import AvatarBadgeThree from "../../../assets/img/card_badge3.png";
import AvatarBadgeFour from "../../../assets/img/class4.svg";

export const avatars = [
  {
    id: 1,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
    CardBadge: AvatarBadgeOne,
  },
  {
    id: 2,
    name: "Haseeb the Military Man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarTwo,
    CardBadge: AvatarBadgeTwo,
  },
  {
    id: 3,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
    CardBadge: AvatarBadgeThree,
    buttonRentNow: (
      <button className="px-0 btn btn-primary hk_btn_with_bg_theme rent_now">
        RENT NOW
      </button>
    ),
  },
  {
    id: 4,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
    CardBadge: AvatarBadgeFour,
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
