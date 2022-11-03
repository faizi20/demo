import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import StepWizard from 'react-step-wizard';
import StepOne from '../../../Components/CreateTournamentWizard/StepOne/StepOne';
import StepTwo from '../../../Components/CreateTournamentWizard/StepTwo/StepTwo';
import StepThree from '../../../Components/CreateTournamentWizard/StepThree/StepThree';
import StepFour from '../../../Components/CreateTournamentWizard/StepFour/StepFour';
import StepFive from '../../../Components/CreateTournamentWizard/StepFive/StepFive';
import StepSix from '../../../Components/CreateTournamentWizard/StepSix/StepSix';
import StepSeven from '../../../Components/CreateTournamentWizard/StepSeven/StepSeven';
import StepEight from '../../../Components/CreateTournamentWizard/StepEight/StepEight';
import StepNine from '../../../Components/CreateTournamentWizard/StepNine/StepNine';
import StepTen from '../../../Components/CreateTournamentWizard/StepTen/StepTen';
import HeaderCreateTournament from '../../../Components/Header/HeaderCreateTournament';

const CreateTournament = () => {
  return (
    <>
      <HeaderCreateTournament />
      <div className="createTournamentWrp">
        <Container fluid="true">
          <StepWizard transitions="nothing">
            <StepOne />
            <StepTwo />
            <StepThree />
            <StepFour />
            <StepFive />
            <StepSix />
            <StepSeven />
            <StepEight />
            <StepNine />
            <StepTen />
          </StepWizard>
        </Container>
      </div>
    </>
  );
};

export default CreateTournament;
