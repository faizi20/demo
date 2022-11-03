import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TournamentProgress = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <div className="tournament_progpress pt-5 text-center">
            <i className="fa-solid fa-trophy"></i>
            <h1 className="primary_heading w-100">Tournament in progress</h1>
            <p className="primary_paragraph m-auto">
              Results will genereate after the tournament has ended
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TournamentProgress;
