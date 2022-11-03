import React from "react";
import PriceIcon from "../../assets/img/price_icon.png";

const MatchHistoryData = (props) => {
  const {
    name,
    result,
    userProfileImage,
    daysAgo,
    gameType,
    duration,
    classBadge,
    score,
  } = props.global;
  const index = props.index;
  return (
    <tr>
      <td colSpan={2}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={userProfileImage} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <label>{name}</label>
            <span>{classBadge}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="results">
          <h6
            className={
              result === "WON"
                ? "primary_heading color_won"
                : "primary_heading color_lost"
            }
          >
            {result}
          </h6>
          <span>{daysAgo}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{gameType}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{duration}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{score}</h6>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MatchHistoryData;
