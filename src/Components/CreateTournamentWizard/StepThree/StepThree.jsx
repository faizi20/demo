import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import { selectCreateTournamentForm } from '../../../store/tournament/tournament.selector';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';
import { createAction } from '../../../utils/reducer/reducer.util';
import WizardButton from '../WizardButton/WizardButton';

const StepThree = ({ nextStep, previousStep, currentStep }) => {
  const dispatch = useDispatch();
  const form = useSelector(selectCreateTournamentForm);
  const [scheduleDate, setScheduleDate] = useState(new Date(form.scheduleDate));

  const scheduleDateChangeHandler = value => {
    setScheduleDate(new Date(value));
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        scheduleDate: scheduleDate.toISOString(),
      })
    );
    nextStep();
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">Schedule the tournament</h2>

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
                <div className="counterWrp justify-content-center">
                  <DateTimePicker
                    format="dd MMM, y, hh:mm a"
                    value={scheduleDate}
                    onChange={scheduleDateChangeHandler}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={30}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepThree;
