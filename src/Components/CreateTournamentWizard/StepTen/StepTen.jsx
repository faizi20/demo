import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import WizardButton from '../WizardButton/WizardButton';
import { useNavigate } from 'react-router-dom';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import { createTournamentAsync } from '../../../store/tournament/tournament.action';
import { selectCreateTournamentForm } from '../../../store/tournament/tournament.selector';

const StepTen = ({ previousStep, currentStep }) => {
  const form = useSelector(selectCreateTournamentForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateOnSuccessfulTournamentCreation = () => {
    navigate('/game-center');
  };

  const nextStepHandler = () => {
    dispatch(
      createTournamentAsync(form, navigateOnSuccessfulTournamentCreation)
    );
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">Finish</h2>
          <div className="dies1_banner for_left">
            <img src={DiesLeft} alt="Dies" />
          </div>
          <div className="dies1_banner for_right">
            <img src={DiesRight} alt="Dies" />
          </div>
        </div>
      </Col>
      <Col md={6} className="p-0">
        <div className="rightWrp">
          <div className="content">
            <div className="d-flex justify-content-center">
              <div>
                <h1 className="text-light">Complete!</h1>
                <p className="text-light">
                  Click next to create the tournament
                </p>
              </div>
            </div>
          </div>
          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={100}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepTen;
