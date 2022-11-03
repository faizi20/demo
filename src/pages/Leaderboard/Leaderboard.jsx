import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

import LeaderboardGlobal from './LeaderboardGlobal';
import LeaderboardLocal from './LeaderboardLocal';

const Leaderboard = () => {
  const { t } = useTranslation();

  let active = 2;
  let items = [];

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="about_page leaderboard">
      <div className="page_header">
        <Container>
          <Row>
            <Col md={12}>
              <div className="page_main_info">
                <h4 className="sub_heading">
                  {' '}
                  {i18next.t('leaderboard_sub_head')}
                </h4>
                <h1 className="primary_heading">
                  {' '}
                  {i18next.t('leaderboard_main_head')}
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg_change">
          <Container>
            <Row>
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3 hk_nav_tabs"
              >
                <Tab eventKey="home" title={t('leaderboard_tab_button_global')}>
                  <Table
                    striped
                    responsive="sm"
                    variant="dark hk_table_full for_only_leaderboard mt-5"
                  >
                    <thead>
                      <tr>
                        <th width="100">
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_one')}
                          </p>
                        </th>
                        <th colSpan={2}>
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_two')}
                          </p>
                        </th>
                        <th>
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_three')}
                          </p>
                        </th>
                        <th>
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_four')}
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <LeaderboardGlobal />
                    </tbody>
                  </Table>
                </Tab>
                <Tab
                  eventKey="profile"
                  title={t('leaderboard_tab_button_local')}
                >
                  <Table
                    striped
                    responsive="sm"
                    variant="dark hk_table_full for_only_leaderboard mt-5"
                  >
                    <thead>
                      <tr>
                        <th width="100">
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_one')}
                          </p>
                        </th>
                        <th colSpan={2}>
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_two')}
                          </p>
                        </th>
                        <th>
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_three')}
                          </p>
                        </th>
                        <th>
                          <p className="primary_paragraph">
                            {' '}
                            {i18next.t('leaderboard_table_col_four')}
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <LeaderboardLocal />
                    </tbody>
                  </Table>
                </Tab>
              </Tabs>
              <Col md={12}>
                <Pagination className="hk_category_pagination align-items-center justify-content-center mt-5">
                  <Pagination.Prev className="prev_next" />
                  <Pagination>{items}</Pagination>
                  <Pagination.Next className="prev_next" />
                </Pagination>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
