import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

import DominoLogo from '../../assets/img/dominobig.png';
import WhoWeAreChar from '../../assets/img/who_we_are.png';
import WhoWeAreDies from '../../assets/img/who_we_dies.png';
import TheGame from '../../assets/img/the-game.png';
import Blockchain from '../../assets/img/blockchain.png';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about_page">
        <div className="page_header">
          <Container>
            <Row>
              <Col md={12}>
                <div className="page_main_info">
                  <h4 className="sub_heading">
                    {i18next.t('about_banner_section_sub_head')}
                  </h4>
                  <h1 className="primary_heading">
                    {i18next.t('about_banner_section_main_head')}
                  </h1>
                  <img src={DominoLogo} alt="Domino-Logo" />
                  <p className="primary_paragraph">
                    {i18next.t('about_banner_section_main_para')}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="whoweare">
          <Container>
            <Row className="row mb-5 pb-5 mt-5 pt-5">
              <Col md={6}>
                <div className="who_we_are">
                  <h1 className="primary_heading">
                    {i18next.t('about_what_we_do_head')}
                  </h1>
                  <p className="primary_paragraph">
                    {i18next.t('about_what_we_do_para')}
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="who_we_are right my_animation">
                  <div className="image1-controller">
                    <img src={WhoWeAreChar} alt="Character-1" />
                  </div>
                  <div className="image2-controller">
                    <img src={WhoWeAreDies} alt="dies-2" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="who_we_are right my_animation about_the_game">
                  <div className="image1-controller">
                    <img src={TheGame} alt="TheGame-1" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="who_we_are">
                  <h1 className="primary_heading">
                    {' '}
                    {i18next.t('about_what_the_game_head')}
                  </h1>
                  <p className="primary_paragraph">
                    {i18next.t('about_what_the_game_para')}
                    <br />
                    <br />
                    {i18next.t('about_what_the_game_para_split')}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="row mt-5 pt-5 pb-5">
              <Col md={6}>
                <div className="who_we_are">
                  <h1 className="primary_heading">
                    {' '}
                    {i18next.t('about_blockchain_head')}
                  </h1>
                  <p className="primary_paragraph">
                    {i18next.t('about_blockchain_para')}
                    <br />
                    <br />
                    {i18next.t('about_blockchain_para_split')}
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="who_we_are right my_animation about_the_game">
                  <div className="image1-controller">
                    <img src={Blockchain} alt="Blockchain" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="join_battle_form_section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="join_battle_form_inner banner_left">
                  <h4 className="sub_heading">
                    {' '}
                    {i18next.t('join_battle_sub_head')}
                  </h4>
                  <h1 className="primary_heading">
                    <Trans i18nKey="join_battle_main_head">
                      &nbsp; <span></span>
                    </Trans>
                  </h1>
                </div>
                <Form className="for_form_bg">
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder={t('join_battle_form_placeholder')}
                    />
                    <Button variant="primary hk_btn_with_bg_theme">
                      {i18next.t('join_battle_form_button')}
                    </Button>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
