import React from "react";
import Row from "react-bootstrap/Row";
import AvatarCard from "./AvatarCard";
import AvatarOne from "../../assets/img/avtar1.png";
import AvatarTwo from "../../assets/img/avtar2.png";

export const avatars = [
  {
    id: 1,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
  },
  {
    id: 2,
    name: "Haseeb the Military Man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarTwo,
  },
  {
    id: 3,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
  },
  {
    id: 4,
    name: "Captain the military man",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarOne,
  },
];

const AvatarCards = () => {
  return (
    <div className="cards_main">
      <Row>
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} />
        ))}
      </Row>
    </div>
  );
};

export default AvatarCards;
