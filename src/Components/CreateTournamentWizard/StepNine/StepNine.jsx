import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import WizardButton from '../WizardButton/WizardButton';
import { useNavigate } from 'react-router-dom';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCreateTournamentForm,
  selectTournamentEnvironmentFloors,
} from '../../../store/tournament/tournament.selector';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';

const StepNine = ({ nextStep, previousStep, currentStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const floors = useSelector(selectTournamentEnvironmentFloors);
  const form = useSelector(selectCreateTournamentForm);
  const [environmentFloor, setEnvironmentFloor] = useState(
    form.environmentFloor
  );

  const environmentFloorSelectHandler = event => {
    setEnvironmentFloor(event.target.value);
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        environmentFloor,
      })
    );
    nextStep();
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">Select environment floor </h2>

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
            <Row>
              <Col md="8" className="m-auto">
                <div className="radioWrp1">
                  <Row>
                    {floors.map(floor => (
                      <Col key={floor.name}>
                        <Form.Check
                          name="tournamentFloor"
                          type="radio"
                          id={floor.name}
                        >
                          <input
                            name="tournamentFloor"
                            type="radio"
                            id={floor.name}
                            defaultChecked={floor.name === environmentFloor}
                            className="form-check-input"
                            onChange={environmentFloorSelectHandler}
                            value={floor.name}
                          />
                          <Form.Check.Label
                            className="radioLabel p-0"
                            type="radio"
                          >
                            <img src={floor.image} alt="Dies" />
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="imgBg evironmentFloorBg p-0">
                  <img
                    src={
                      floors.find(floor => floor.name === environmentFloor)
                        .image
                    }
                    alt="tournament floor"
                  />
                </div>
              </Col>
            </Row>
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

export default StepNine;
