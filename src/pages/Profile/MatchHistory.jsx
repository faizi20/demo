import React from "react";
import User from "../../assets/img/user.png";
import MatchHistoryData from "./MatchHistoryData";

export const globalData = [
  {
    id: 1,
    name: "John the baptist",
    classBadge: "Class 3",
    userProfileImage: User,
    result: "WON",
    daysAgo: "2 days ago",
    gameType: "Score to win",
    duration: "2:35",
    score: "75/150/100",
  },
  {
    id: 2,
    name: "John the baptist",
    classBadge: "Class 2",
    userProfileImage: User,
    result: "LOST",
    daysAgo: "2 days ago",
    gameType: "Score to win",
    duration: "2:35",
    score: "75/150/100",
  },
  {
    id: 3,
    name: "John the baptist",
    classBadge: "Class 1",
    userProfileImage: User,
    result: "WON",
    daysAgo: "2 days ago",
    gameType: "Score to win",
    duration: "2:35",
    score: "75/150/100",
  },
  {
    id: 4,
    name: "John the baptist",
    classBadge: "Class 5",
    userProfileImage: User,
    result: "LOST",
    daysAgo: "2 days ago",
    gameType: "Score to win",
    duration: "2:35",
    score: "75/150/100",
  },
  {
    id: 5,
    name: "John the baptist",
    classBadge: "Class 4",
    userProfileImage: User,
    result: "WON",
    daysAgo: "2 days ago",
    gameType: "Score to win",
    duration: "2:35",
    score: "75/150/100",
  },
];

const MatchHistory = () => {
  return (
    <>
      {globalData.map((global, index) => (
        <MatchHistoryData key={global.id} global={global} index={index} />
      ))}
    </>
  );
};

export default MatchHistory;
