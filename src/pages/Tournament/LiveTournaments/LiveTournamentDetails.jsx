import React from "react";
import { useSelector } from "react-redux";
import { selectTournaments } from "../../../store/tournament/tournament.selector";

import LiveTournamentDetailsData from "./LiveTournamentDetailsData";

const LiveTournamentDetails = () => {
  
  const tournaments = useSelector(selectTournaments);
  console.log("LIVE--zoma bawal", tournaments);

  return (
    <>
      {tournaments.length === 0 && (
        <div className="d-flex justify-content-center">No Data...</div>
      )}
      {tournaments.map((tournament) => (
        <LiveTournamentDetailsData
          key={tournament._id}
          tournament={tournament}
        />
      ))}
    </>
  );
};

export default LiveTournamentDetails;
