import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import PriceIcon from "../../../assets/img/price_icon.png";
import TournamentEnterModal from "../../../Components/Modals/TournamentEnter/TournamentEnterModal";
import { getTournamentsAsync } from "../../../store/tournament/tournament.action";
import { selectUser } from "../../../store/user/user.selectors";

const PastTournamentDetailsData = (props) => {
  const [modalShowForgetPassword, setModalShowForgetPassword] = useState(false);
  const handleClick = () => {
    setModalShowForgetPassword(true);
  };
  const { tournament } = props;

  const dispatch = useDispatch();
  const status = "past";
  const host = useSelector(selectUser)?._id;
  const getTournaments = useCallback(() => {
    if (!host) {
      return;
    }
    dispatch(getTournamentsAsync({ status }));
  }, [host]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      getTournaments();
    }, 500);

    return () => clearTimeout(timerId);
  }, [getTournaments]);

  return (
    <tr>
      <td className="py-0" colSpan={2}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{tournament.name}</h6>
          </div>
        </div>
      </td>

      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{tournament.rule}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6>{tournament.status}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6>{tournament.entryFee}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6>{tournament.prizePool}</h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex">
          <div className="profile_with_text">
            <h6>
              {tournament.players.length}/{tournament.noOfPlayers}
            </h6>
          </div>
        </div>
      </td>
      <td className="py-0">
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <Button
              variant="btn btn-primary hk_btn_with_bg_theme"
              onClick={handleClick}
            >
              ENTER
            </Button>
          </div>
        </div>
      </td>
      <TournamentEnterModal
        show={modalShowForgetPassword}
        onHide={() => setModalShowForgetPassword(false)}
        setModalShowForgetPasswords={setModalShowForgetPassword}
      />
    </tr>
  );
};

export default PastTournamentDetailsData;
