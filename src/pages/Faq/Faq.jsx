import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

import GeneralComponent from './GeneralComponent';
import AccountComponent from './AccountComponent';
import DominoGameComponent from './DominoGameComponent';

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="about_page leaderboard faqs">
      <div className="page_header">
        <Container>
          <Row>
            <Col md={12}>
              <div className="page_main_info">
                <h4 className="sub_heading">
                  {i18next.t('faq_main_sub_head')}
                </h4>
                <h1 className="primary_heading">
                  {i18next.t('faq_main_sub_main')}
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg_change">
        <Container>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="general">
              <Row className="mb-5">
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="general">
                        <span> {i18next.t('faq_tabs_names_general')}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="account">
                        <span> {i18next.t('faq_tabs_names_account')}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="nft">
                        <span> {i18next.t('faq_tabs_names_nft')}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="game">
                        <span> {i18next.t('faq_tabs_names_game')}</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="general">
                      <GeneralComponent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="account">
                      <AccountComponent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="nft">
                      <AccountComponent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="game">
                      <DominoGameComponent />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
