import React from "react";
import { useSelector } from "react-redux";
import User from "../../../assets/img/user.png";
import { selectTournaments } from "../../../store/tournament/tournament.selector";

import PastTournamentDetailsData from "./PastTournamentDetailsData";



const PastTournamentDetails = () => {

  const tournaments = useSelector(selectTournaments);
  console.log("PAST", tournaments);

  return (
    <>
      {tournaments.length === 0 && (
        <div className="d-flex justify-content-center">No Data...</div>
      )}
      {tournaments.map((tournament) => (
        <PastTournamentDetailsData
          key={tournament._id}
          tournament={tournament}
        />
      ))}
    </>
  );
};

export default PastTournamentDetails;
