import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import WizardButton from '../WizardButton/WizardButton';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import CounterPlus from '../../../assets/img/plus.svg';
import CounterMinus from '../../../assets/img/minus.svg';
import price_icon from '../../../assets/img/price_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectCreateTournamentForm } from '../../../store/tournament/tournament.selector';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';

const StepFour = ({ nextStep, previousStep, currentStep }) => {
  const dispatch = useDispatch();
  const form = useSelector(selectCreateTournamentForm);
  const [entryFee, setEntryFee] = useState(0);
  const [prizePool, setPrizePool] = useState(form.noOfPlayers * entryFee);

  const entryFeeDecrement = () => {
    setEntryFee(state => {
      if (state === 0) {
        return state;
      } else {
        return state - 1;
      }
    });
  };

  const entryFeeIncrement = () => {
    setEntryFee(state => state + 1);
  };

  useEffect(() => {
    setPrizePool(form.noOfPlayers * entryFee);
  }, [entryFee, form]);

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        entryFee,
        prizePool,
      })
    );
    nextStep();
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">
            Set entry fee and decide tournament prize pool
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
                <p className="primary_paragraph m-0 mb-2 entryFee">Entry Fee</p>
                <div className="counterWrp mb-4">
                  <button
                    className="btn counterBtn"
                    onClick={entryFeeDecrement}
                  >
                    <img src={CounterMinus} alt="CounterMinus" />
                  </button>
                  <div className="d-flex align-align-items-center">
                    <img src={price_icon} className="me-2" alt="Price Icon" />
                    <h6>{entryFee}</h6>
                  </div>

                  <button
                    className="btn counterBtn"
                    onClick={entryFeeIncrement}
                  >
                    <img src={CounterPlus} alt="CounterPlus" />
                  </button>
                </div>

                <p className="primary_paragraph m-0 mb-2 entryFee">
                  Prize Pool
                </p>

                <div className="counterWrp">
                  <button className="btn counterBtn" disabled>
                    <img src={CounterMinus} alt="CounterMinus" />
                  </button>
                  <div className="d-flex align-align-items-center">
                    <img src={price_icon} className="me-2" alt="Price Icon" />
                    <h6>{prizePool}</h6>
                  </div>
                  <button className="btn counterBtn" disabled>
                    <img src={CounterPlus} alt="CounterPlus" />
                  </button>
                </div>
              </Col>
            </Row>
          </div>
          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={40}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepFour;
