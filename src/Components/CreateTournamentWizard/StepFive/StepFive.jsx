import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import WizardButton from '../WizardButton/WizardButton';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import RulesModal from '../../Modals/RulesModal/RulesModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCreateTournamentForm,
  selectTournamentRules,
} from '../../../store/tournament/tournament.selector';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';

const StepFive = ({ nextStep, previousStep, currentStep }) => {
  const dispatch = useDispatch();
  const rules = useSelector(selectTournamentRules);
  const form = useSelector(selectCreateTournamentForm);
  const [selectedRule, setSelectedRule] = useState(form.rule);
  const [rulesModalShow, setRulesModalShow] = useState(false);

  const rulesModalHandler = () => {
    setRulesModalShow(true);
  };

  const selectRuleHandler = event => {
    setSelectedRule(event.target.value);
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        rule: selectedRule,
      })
    );
    nextStep();
  };

  return (
    <Row>
      <RulesModal
        show={rulesModalShow}
        onHide={() => setRulesModalShow(false)}
        setRulesModalShow={setRulesModalShow}
      />

      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">Select domino rules</h2>
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
                <div className="radioWrp d-flex flex-column align-items-center">
                  {rules.map(rule => {
                    return (
                      <Form.Check
                        key={rule.name}
                        name="tournamentRule"
                        type="radio"
                        id={rule.name}
                        className="mb-3"
                      >
                        <input
                          name="tournamentRule"
                          type="radio"
                          id={rule.name}
                          className="form-check-input"
                          defaultChecked={rule.name === selectedRule}
                          onChange={selectRuleHandler}
                          value={rule.name}
                        />

                        <Form.Check.Label className="radioLabel" type="radio">
                          <b className="textWhite">{rule.name.toUpperCase()}</b>
                          You can have maximum of TBD rounds in a single match.
                          You can have maximum of TBD rounds in a single match.
                          <a
                            href="#"
                            className="readMore"
                            onClick={rulesModalHandler}
                          >
                            Read More
                          </a>
                        </Form.Check.Label>
                      </Form.Check>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </div>

          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={50}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepFive;
