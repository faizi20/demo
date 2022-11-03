import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import { useDispatch, useSelector } from 'react-redux';
import WizardButton from '../WizardButton/WizardButton';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';
import { selectCreateTournamentForm } from '../../../store/tournament/tournament.selector';

const StepOne = ({ nextStep, currentStep }) => {
  const dispatch = useDispatch();
  const form = useSelector(selectCreateTournamentForm);
  const [name, setName] = useState(form.name);

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        name,
      })
    );
    nextStep();
  };

  return (
    <>
      <Row>
        <Col md={6} className="p-0">
          <div className="leftWrp">
            <h2 className="secondary_heading">Name your tournament</h2>

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
                  <Form.Control
                    type="text"
                    className="text-light"
                    placeholder="Tournament Name"
                    value={name}
                    onChange={nameChangeHandler}
                  />
                </Col>
              </Row>
            </div>
            <WizardButton nextStep={nextStepHandler} completed={10} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StepOne;
