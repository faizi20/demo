import React from "react";
import User from "../../assets/img/user.png";
import LeaderboardGlobalData from "./LeaderboardGlobalData";

export const globalData = [
  {
    id: 1,
    name: "John the baptist",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 2,
    name: "Danger 123",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 3,
    name: "Fast Facts",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 4,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 5,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 6,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 7,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 8,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 9,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
  {
    id: 10,
    name: "Demolition Karen",
    userProfileImage: User,
    winning: 250,
    earning: 200,
  },
];

const LeaderboardGlobal = () => {
  return (
    <>
      {globalData.map((global, index) => (
        <LeaderboardGlobalData key={global.id} global={global} index={index} />
      ))}
    </>
  );
};

export default LeaderboardGlobal;
