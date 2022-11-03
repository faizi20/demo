import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import WizardButton from '../WizardButton/WizardButton';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCreateTournamentForm,
  selectDominoTileColors,
} from '../../../store/tournament/tournament.selector';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';

const StepEight = ({ nextStep, previousStep, currentStep }) => {
  const dispatch = useDispatch();
  const tileColors = useSelector(selectDominoTileColors);
  const form = useSelector(selectCreateTournamentForm);
  const [dominoTileColor, setDominoTileColor] = useState(form.dominoTileColor);

  const selectDominoTileColorHandler = event => {
    setDominoTileColor(event.target.value);
  };

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        dominoTileColor,
      })
    );
    nextStep();
  };

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">Select domino tile color</h2>
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
                    {tileColors.map(tile => (
                      <Col key={tile.name}>
                        <Form.Check
                          name="dominoTile"
                          type="radio"
                          id={tile.name}
                        >
                          <input
                            name="dominoTile"
                            type="radio"
                            id={tile.name}
                            className="form-check-input"
                            defaultChecked={tile.name === dominoTileColor}
                            value={tile.name}
                            onChange={selectDominoTileColorHandler}
                          />
                          <Form.Check.Label className="radioLabel" type="radio">
                            <img src={tile.image} alt="Dies" />
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="imgBg tileColorTableBg">
                  <img
                    src={
                      tileColors.find(tile => tile.name === dominoTileColor)
                        .image
                    }
                    alt="domino tile"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={80}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepEight;
