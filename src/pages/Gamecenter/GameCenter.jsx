import { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PriceIcon from '../../assets/img/taunt.png';
import Filter from '../../assets/img/filter.png';
import ProfileUser from '../../assets/img/gamecard2.png';
import MatchHistory from './MatchHistory';
import InventoryCards from './InventoryCards';
import Nav from 'react-bootstrap/Nav';
import PRIZEPOOL from '../../assets/img/price_icon.png';
import { getTournamentsAsync } from '../../store/tournament/tournament.action';
import { selectTournaments } from '../../store/tournament/tournament.selector';
import { selectUser } from '../../store/user/user.selectors';
import '../../i18next';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

const GameCenter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchString, setSearchString] = useState('');

  const tournaments = useSelector(selectTournaments);

  const host = useSelector(selectUser)?._id;

  let active = 2;
  let items = [];

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const searchStringHandler = event => {
    setSearchString(event.target.value);
    setPage(1);
    setLimit(10);
  };

  const nextPageHandlet = () => {
    if (tournaments.length === 0) {
      return;
    }
    setPage(page => page + 1);
  };

  const previousPageHandler = () => {
    setPage(page => (page === 1 ? page : page - 1));
  };

  const getTournaments = useCallback(() => {
    if (!host) {
      return;
    }
    dispatch(getTournamentsAsync({ page, limit, searchString, host }));
  }, [page, limit, searchString, host]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      getTournaments();
    }, 500);

    return () => clearTimeout(timerId);
  }, [getTournaments]);

  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      labels: {
        style: {
          color: '#163f5c',
        },
      },
      gridLineColor: '#163f5c',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      accessibility: {
        description: '',
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#163f5c',
        },
      },
      gridLineColor: '#163f5c',
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: '',
        data: [
          5.2,
          5.7,
          8.7,
          13.9,
          18.2,
          21.4,
          25.0,
          {
            y: 26.4,
            accessibility: {
              description: '',
            },
          },
          22.8,
          17.5,
          12.1,
          7.6,
        ],
        color: '#4fd322',
      },
      {
        name: '',
        data: [
          {
            y: 1.5,
            accessibility: {
              description: '',
            },
          },
          1.6,
          3.3,
          5.9,
          10.5,
          13.5,
          14.5,
          14.4,
          11.5,
          8.7,
          4.7,
          2.6,
        ],
        color: '#ffd51f',
      },
    ],
  };
  return (
    <div className="category_holder player_profile game_center  about_page leaderboard faqs ar_ver_gamecenter">
      <div className="page_header category_page gameee">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Row className="align-items-end justify-content-between">
                <Col md={5} xs={10} className="player_profile_info">
                  <h1 className="primary_heading">
                    {i18next.t('username')} {i18next.t('game_center')}
                  </h1>
                  <div className="d-flex">
                    <div className="code_copy">
                      <label>0xe4d....d970</label>
                    </div>
                    <div className="code_copy">
                      <i className="fa-solid fa-clone"></i>
                    </div>
                  </div>
                </Col>
                <Col
                  md={6}
                  xs={12}
                  className="player_profile_info center_hk_for_screen"
                >
                  <div className="profile_img">
                    <img src={ProfileUser} alt="Profile-User" />
                  </div>
                </Col>
                <Col md={1} xs={2} className="player_profile_info">
                  <div className="profile_setting">
                    <a href="JavaScript:void(0);">
                      <span>
                        <i className="fa-solid fa-gear"></i>
                      </span>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-5 bg_dark">
        <Container fluid className="px-5">
          <Row className="justify-cent">
            <Tab.Container id="left-tabs-example" defaultActiveKey="stats">
              <Row className="mb-5">
                <Col lg={2} md={3} sm={12}>
                  <Nav variant="pills" className="flex-md-column">
                    <Nav.Item>
                      <Nav.Link eventKey="stats">
                        <span>{i18next.t('tournament_stats')}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="inventory">
                        <span>{i18next.t('inventory')}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="earnings">
                        <span>{i18next.t('earnings')}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="history">
                        <span>{i18next.t('my_tournaments')}</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={10} md={9} sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="stats">
                      <div className="player_profile_info">
                        <h1 className="primary_heading">
                          {i18next.t('tournament_stats')}
                        </h1>
                        <div className="stats_bg">
                          <div className="d-flex align-items-center generic_heading spacing-wrap">
                            <div className="statics">
                              <h4 className="sub_heading">
                                {i18next.t('created')}{' '}
                              </h4>
                              <h5>15</h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">
                                {i18next.t('finish')}
                              </h4>
                              <h5>9</h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">
                                {i18next.t('ongoing')}
                              </h4>
                              <h5>6</h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">
                                {i18next.t('total_prizePool')}
                              </h4>
                              <h5>
                                <span className="prizepool">
                                  <img src={PRIZEPOOL} />
                                </span>
                                1500
                              </h5>
                            </div>
                            <div className="statics">
                              <h4 className="sub_heading">
                                {i18next.t('earning_percentage')}
                              </h4>
                              <h5>75%</h5>
                            </div>
                            {/* <div className="statics">
                              <h4 className="sub_heading">ACHIEVEMENT</h4>
                              <h5>Pro Champion</h5>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="inventory">
                      {' '}
                      <Col md={12}>
                        <div className="mini-info mt-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="heading_viewAll">
                              <h3>{i18next.t('inventory')}</h3>
                            </div>
                            <div className="heading_viewAll">
                              <Link to="/inventory">
                                {i18next.t('view_all')}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <InventoryCards />
                    </Tab.Pane>
                    <Tab.Pane eventKey="earnings">
                      {' '}
                      <div className="player_profile_info">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="earning_inner">
                            <h1 className="primary_heading">
                              {i18next.t('earnings')}
                            </h1>
                          </div>
                          <div className="earning_inner profile_setting_left">
                            <Form.Group className="mb-3">
                              <Form.Select id="filter">
                                <option>{i18next.t('weekly')}</option>
                                <option>{i18next.t('monthly')}</option>
                                <option>{i18next.t('yearly')}</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="chart_bg hk_chart_for_gc">
                          <Row>
                            <Col lg={8} md={7} sm={6}>
                              <div className="earning_header">
                                <p className="primary_paragraph">
                                  {i18next.t('total_earnings')}
                                </p>
                                <div className="d-flex align-items-center">
                                  <div className="inner_chart_info">
                                    <img src={PriceIcon} alt="Price-Icon" />
                                  </div>
                                  <div className="inner_chart_info">
                                    <h5>600 USDT</h5>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={5} sm={6}>
                              <div className="d-flex align-items-center justify-content-around dot_color_style">
                                <div className="earning_right">
                                  <p className="primary_paragraph">
                                    {i18next.t('avatar')}
                                  </p>
                                  <div className="d-flex align-items-center">
                                    <div className="inner_chart_info">
                                      <img src={PriceIcon} alt="Price-Icon" />
                                    </div>
                                    <div className="inner_chart_info">
                                      <h5>300 USDT</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="earning_right">
                                  <p className="primary_paragraph">
                                    {i18next.t('tournament')}
                                  </p>
                                  <div className="d-flex align-items-center">
                                    <div className="inner_chart_info">
                                      <img src={PriceIcon} alt="Price-Icon" />
                                    </div>
                                    <div className="inner_chart_info">
                                      <h5>300 USDT</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>

                          <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                      {' '}
                      <div className="player_profile_info">
                        <div className="earning_inner">
                          <h1 className="primary_heading mb-1">
                            {i18next.t('my_tournaments')}
                          </h1>
                        </div>
                        <Row className="align-items-center">
                          <Col lg={10} md={12}>
                            <div className="hk_main_filter_area game-center-filter">
                              <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                  <i className="fa-solid fa-magnifying-glass"></i>
                                </InputGroup.Text>
                                <Form.Control
                                  value={searchString}
                                  placeholder="Search"
                                  onChange={searchStringHandler}
                                  aria-describedby="basic-addon1"
                                />
                                {
                                  <Dropdown>
                                    <Dropdown.Toggle
                                      id="dropdown-button-dark-example1"
                                      variant="secondary"
                                    >
                                      <span>
                                        <img src={Filter} alt="Filter" />
                                      </span>{' '}
                                      {i18next.t('filter')}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                      <Dropdown.Item active>
                                        {i18next.t('By_name')}
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        {i18next.t('By_category')}
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                }
                              </InputGroup>
                            </div>
                          </Col>
                          <Col lg={2} md={12}>
                            <div className="create_btn_handler text-end">
                              <Link
                                to="/create-tournament"
                                className="primary creat_game_center_btn"
                              >
                                {i18next.t('create')}
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Table
                        striped
                        responsive="sm"
                        variant="dark hk_table_full mt-0 hk_history generic_heading"
                      >
                        <thead>
                          <tr>
                            <th>
                              <p className="primary_paragraph">
                                {i18next.t('tournaments')}
                              </p>
                            </th>
                            <th colSpan={2}>
                              <p className="primary_paragraph">
                                {i18next.t('rules')}
                              </p>
                            </th>
                            <th>
                              <p className="primary_paragraph">
                                {i18next.t('entryFee')}
                              </p>
                            </th>
                            <th>
                              <p className="primary_paragraph">
                                {i18next.t('prizePool')}
                              </p>
                            </th>
                            <th colSpan={2}>
                              <p className="primary_paragraph">
                                {i18next.t('players')}
                              </p>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <MatchHistory />
                        </tbody>
                      </Table>
                      <Col md={12}>
                        <Pagination className="hk_category_pagination align-items-center justify-content-center mt-3">
                          <Pagination.Prev
                            onClick={previousPageHandler}
                            className="prev_next"
                          />
                          <Pagination>{items}</Pagination>
                          <Pagination.Next
                            onClick={nextPageHandlet}
                            className="prev_next"
                          />
                        </Pagination>
                      </Col>
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

export default GameCenter;
