import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import i18next from 'i18next';

import PriceIcon from '../../../assets/img/price_icon.png';
import TournamentProgress from './TournamentProgress/TournamentProgress';
import CardResultTournament from './CardResultTournament/CardResultTournament';
import BracketResultTournament from './BracketResultTournament/BracketResultTournament';

const TournamentResult = () => {
  const { t } = useTranslation();

  const [tournamentProgress, setTournamentProgress] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const changeBg = () => {
    setIsActive(true);
  };
  const changeBgResult = () => {
    setIsActive(false);
  };

  return (
    <div className="about_page leaderboard faqs tournaments_page tournament_result_page ">
      <div className="page_header">
        <Container>
          <Row>
            <Col md={8} className="px-0">
              <div className="page_main_info text-start">
                <h1 className="primary_heading w-100 mb-4">
                  {i18next.t('tournament_result_head')}
                </h1>
              </div>
              <Row>
                <Col md={10}>
                  <div className="d-flex align-items-center justify-content-between tournament_detail_here">
                    <div className="tournament_detail_inner">
                      <h4 className="sub_heading mb-1">RULE</h4>
                      <h5>Rule 1</h5>
                    </div>
                    <div className="tournament_detail_inner">
                      <h4 className="sub_heading mb-1">TOURNAMENT TYPE</h4>
                      <h5>Game Center</h5>
                    </div>
                    <div className="tournament_detail_inner">
                      <h4 className="sub_heading mb-1">ENTRY FEE</h4>
                      <h5>
                        <img src={PriceIcon} alt="Price-Icon" />
                        20
                      </h5>
                    </div>
                    <div className="tournament_detail_inner">
                      <h4 className="sub_heading mb-1">PRIZE POOL</h4>
                      <h5>
                        <img src={PriceIcon} alt="Price-Icon" />
                        200
                      </h5>
                    </div>
                    <div className="tournament_detail_inner">
                      <h4 className="sub_heading mb-1">DATE</h4>
                      <h5>30 Sep, 2022</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="px-0">
              <div className="tournament_detail_here right text-end">
                {/* Tournament Delete Edit Senerio */}
                <Row className="justify-content-end hk_edit_tour">
                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                    CANCEL
                  </Button>
                  <Button
                    variant="primary hk_btn_with_bg_theme"
                    style={{ boxShadow: 'none' }}
                  >
                    EDIT
                  </Button>
                </Row>

                {/* <Button
                  variant="primary hk_btn_with_bg_theme"
                  style={{ boxShadow: "none" }}
                >
                  ENTER
                </Button> */}
                <div className="tournament_detail_inner pt-5">
                  <h4 className="sub_heading mb-1">PLAYERS JOINED</h4>
                  <h6 className="players_number">50/64</h6>
                </div>
              </div>
            </Col>

            <div
              className={
                isActive
                  ? 'tour_result_bg mt-3 bg_for_bracket'
                  : 'tour_result_bg mt-3'
              }
            >
              <Tab.Container id="left-tabs-example" defaultActiveKey="result">
                <Row className="mb-5">
                  <Col sm={12}>
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="bracket"
                          className="brackett"
                          onClick={changeBg}
                        >
                          BRACKET
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="result" onClick={changeBgResult}>
                          RESULT
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>

                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="bracket">
                        <BracketResultTournament />
                      </Tab.Pane>
                      <Tab.Pane eventKey="result">
                        {tournamentProgress ? (
                          <TournamentProgress />
                        ) : (
                          <CardResultTournament />
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TournamentResult;
