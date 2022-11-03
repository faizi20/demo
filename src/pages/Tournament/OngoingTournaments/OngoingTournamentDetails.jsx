import React from "react";
import { useSelector } from "react-redux";
import { selectTournaments } from "../../../store/tournament/tournament.selector";
import OngoingTournamentDetailsData from "./OngoingTournamentDetailsData";

const OngoingTournamentDetails = () => {
   const tournaments = useSelector(selectTournaments);
   console.log("OPEN", tournaments);

   return (
     <>
       {tournaments.length === 0 && (
         <div className="d-flex justify-content-center">No Data...</div>
       )}
       {tournaments.map((tournament) => (
         <OngoingTournamentDetailsData key={tournament._id} tournament={tournament} />
       ))}
     </>
   );
};
export default OngoingTournamentDetails;
