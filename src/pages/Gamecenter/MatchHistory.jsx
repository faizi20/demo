import { useSelector } from "react-redux";
import MatchHistoryData from "./MatchHistoryData";
import { selectTournaments } from "../../store/tournament/tournament.selector";

const MatchHistory = () => {
  const tournaments = useSelector(selectTournaments);
  console.log("kkkkkkkkkkkkkkk", tournaments);

  return (
    <>
      {tournaments.length === 0 && (
        <div className="d-flex justify-content-center">No Data...</div>
      )}
      {tournaments.map((tournament) => (
        <MatchHistoryData key={tournament._id} tournament={tournament} />
      ))}
    </>
  );
};

export default MatchHistory;
