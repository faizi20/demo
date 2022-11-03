import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import CounterPlus from '../../../assets/img/plus.svg';
import CounterMinus from '../../../assets/img/minus.svg';
import WizardButton from '../WizardButton/WizardButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectCreateTournamentForm } from '../../../store/tournament/tournament.selector';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';
import { createAction } from '../../../utils/reducer/reducer.util';

const StepTwo = ({ nextStep, previousStep, currentStep }) => {
  const form = useSelector(selectCreateTournamentForm);
  const [noOfPlayers, setNoOfPlayers] = useState(form.noOfPlayers);
  const dispatch = useDispatch();

  const decrement = () => {
    setNoOfPlayers(state => {
      if (state == 0) {
        return state;
      } else {
        return state - 1;
      }
    });
  };

  const increment = () => {
    setNoOfPlayers(state => {
      if (state === 64) {
        return state;
      } else {
        return state + 1;
      }
    });
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        noOfPlayers,
      })
    );
    nextStep();
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">
            Number of players who can participate{' '}
          </h2>

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
                <div className="counterWrp">
                  <button className="btn counterBtn" onClick={decrement}>
                    <img src={CounterMinus} alt="CounterMinus" />
                  </button>

                  <h6>{noOfPlayers}</h6>

                  <button className="btn counterBtn" onClick={increment}>
                    <img src={CounterPlus} alt="CounterPlus" />
                  </button>
                </div>

                <p className="primary_paragraph">
                  Maximum 64 players in a single tournament.
                </p>
              </Col>
            </Row>
          </div>

          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={20}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepTwo;
