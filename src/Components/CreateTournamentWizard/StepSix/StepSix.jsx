import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import WizardButton from '../WizardButton/WizardButton';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import {
  selectCreateTournamentForm,
  selectTournamentTableTexture,
} from '../../../store/tournament/tournament.selector';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';

const StepSix = ({ nextStep, previousStep, currentStep }) => {
  const dispatch = useDispatch();
  const textures = useSelector(selectTournamentTableTexture);
  const form = useSelector(selectCreateTournamentForm);
  const [tableTexture, setTableTexture] = useState(form.tableTexture);

  const selectTableTextureHandler = event => {
    setTableTexture(event.target.value);
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        tableTexture,
      })
    );
    nextStep();
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">Select table texture</h2>
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
                    {textures.map(texture => (
                      <Col key={texture.name}>
                        <Form.Check
                          name="tournamentTexture"
                          type="radio"
                          id={texture.name}
                        >
                          <input
                            name="tournamentTexture"
                            type="radio"
                            id={texture.name}
                            defaultChecked={texture.name === tableTexture}
                            className="form-check-input"
                            value={texture.name}
                            onClick={selectTableTextureHandler}
                          />

                          <Form.Check.Label className="radioLabel" type="radio">
                            <img src={texture.image} alt="Dies" />
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="imgBg">
                  <img
                    src={
                      textures.find(texture => texture.name === tableTexture)
                        .image
                    }
                    alt="table texture"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={60}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepSix;
