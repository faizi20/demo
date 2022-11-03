import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Bracket, RoundProps, SeedItem, SeedTeam } from "react-brackets";
import TournamentBracket from './TournamentBracket';

const BracketResultTournament = () => {
  return (
    <Row>
      <Col md={12}>
        <TournamentBracket />
      </Col>
    </Row>
  );
};

export default BracketResultTournament;
