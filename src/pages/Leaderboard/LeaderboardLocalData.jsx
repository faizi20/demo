import React from "react";
import PriceIcon from "../../assets/img/price_icon.png";

const LeaderboardLocalData = (props) => {
  const { name, userProfileImage, winning, earning } = props.global;
  const index = props.index;
  return (
    <tr>
      <td width="100">
        <h6 className="mb-0">{index + 1}</h6>
      </td>
      <td colSpan={2}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={userProfileImage} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <label>{name}</label>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6>{winning}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6>{earning}</h6>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default LeaderboardLocalData;
