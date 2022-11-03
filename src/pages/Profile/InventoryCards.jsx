import React from "react";
import Row from "react-bootstrap/Row";
import AvatarOne from "../../assets/img/avtar1.png";
import AvatarTwo from "../../assets/img/gamecard2.png";
import AvatarThree from "../../assets/img/item4.png";

import InventoryCard from "./InventoryCard";

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
    name: "Small Blue roof house",
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
    name: "Leisure chair",
    points: "4500/5000",
    price: 1000.35,
    priceUSDT: 150,
    image: AvatarThree,
  },
];

const InventoryCards = () => {
  return (
    <div className="cards_main inv_card_hk">
      <Row>
        {avatars.map((avatar) => (
          <InventoryCard key={avatar.id} avatar={avatar} />
        ))}
      </Row>
    </div>
  );
};

export default InventoryCards;
