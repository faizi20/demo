import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import WizardButton from '../WizardButton/WizardButton';
import { useDropzone } from 'react-dropzone';
import DiesLeft from '../../../assets/img/dies_left.png';
import DiesRight from '../../../assets/img/dies_right.png';
import dragImgLogo from '../../../assets/img/dragImgLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../../utils/reducer/reducer.util';
import { TOURNAMENT_ACTION_TYPES } from '../../../store/tournament/tournament.type';
import { selectCreateTournamentForm } from '../../../store/tournament/tournament.selector';

const thumb = {
  width: 50,
  height: 50,
  position: 'relative',
  top: -30,
  zIndex: 1,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const StepSeven = ({ nextStep, previousStep, currentStep }) => {
  const dispatch = useDispatch();
  const form = useSelector(selectCreateTournamentForm);
  const [logo, setLogo] = useState(form.logo);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      const url = URL.createObjectURL(file);
      setLogo(url);
    },
  });

  const nextStepHandler = () => {
    dispatch(
      createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT, {
        logo,
      })
    );
    nextStep();
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(logo);
  }, []);

  return (
    <Row>
      <Col md={6} className="p-0">
        <div className="leftWrp">
          <h2 className="secondary_heading">
            Upload your logo to show on table
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
                <div className="logoUploader">
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <h6>Drag your logo here</h6>
                    ) : (
                      <h6 className="m-0 text-light">
                        Drag 'n' drop some files here, or click to select files
                      </h6>
                    )}
                  </div>
                </div>
                <div className="imgBg logoBgTable">
                  <div style={thumb}>
                    <img
                      src={logo}
                      style={img}
                      onLoad={() => URL.revokeObjectURL(logo)}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <WizardButton
            nextStep={nextStepHandler}
            previousStep={previousStep}
            completed={70}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StepSeven;
