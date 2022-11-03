import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';
import MyVerticallyCenteredModal from '../../Components/Modals/DirectRental/DirectRentalModal';
import OwnerRentModalDialog from '../../Components/Modals/OwnerRental/OwnerRentalModal';
import PutOnMarketModal from '../../Components/Modals/PutOnMarket/PutOnMarket';
import PutOnMarketCongratsModal from '../../Components/Modals/PutOnMarketCongrats/PutOnMarketCongratsModal';
import PriceIcon from '../../assets/img/taunt.png';
import ProfileUser from '../../assets/img/modal_character.png';
import MatchHistory from './MatchHistory';
import InventoryCards from './InventoryCards';
import { Link } from 'react-scroll';

const ProfilePlayer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ownerRentModal, setOwnerRentModal] = useState(false);
  const [putOnMarket, setPutOnMarket] = useState(false);
  const [putOnMarketCongrats, setPutOnMarketCongrats] = useState(false);
  const [scroll, setScroll] = useState(false);

  let navigate = useNavigate();

  let active = 2;
  let items = [];

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const options = {
    xAxis: {
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
      title: {
        text: 'X axis title',
        align: 'low',
      },
    },
    title: {
      text: '',
    },
    legend: {
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'middle',
    },
    plotOptions: {
      series: {
        pointStart: 2010,
      },
    },
    series: [
      {
        name: '',
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
        color: '#4fd322',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  const viewAllInventory = () => {
    navigate('/inventory', { replace: true });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 450);
    });
  }, []);
  return (
    <div className="category_holder player_profile">
      <div className="page_header category_page">
        <Container>
          <Row>
            <Col md={12}>
              <div className="d-flex align-items-end justify-content-between">
                <div className="player_profile_info">
                  <h1 className="primary_heading">John Adler</h1>
                  <div className="d-flex">
                    <div className="code_copy">
                      <label>0xe4d....d970</label>
                    </div>
                    <div className="code_copy">
                      <i className="fa-solid fa-clone"></i>
                    </div>
                  </div>
                </div>
                <div className="player_profile_info">
                  <div className="profile_img">
                    <img src={ProfileUser} alt="Profile-User" />
                  </div>
                </div>
                <div className="player_profile_info">
                  <div className="profile_setting">
                    <a href="JavaScript:void(0);">
                      <span>
                        <i className="fa-solid fa-gear"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg_change pt-5 bg_dark">
        <Container fluid>
          <div className="row">
            <Col
              md={12}
              className={scroll ? 'position_fixed' : 'position_relative'}
            >
              <ul className="mb-3 hk_nav_tabs nav nav-tabs profile_tab_scroll justify-content-between">
                <li>
                  <Link
                    activeclassName="active"
                    to="game"
                    spy={true}
                    smooth={true}
                  >
                    game
                  </Link>
                </li>
                <li>
                  <Link to="tournaments" spy={true} smooth={true}>
                    Tournaments Stats
                  </Link>
                </li>
                <li>
                  <Link to="inventory" spy={true} smooth={true}>
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link to="earnings" spy={true} smooth={true}>
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link to="match" spy={true} smooth={true}>
                    match
                  </Link>
                </li>
              </ul>
            </Col>
          </div>
          <Container>
            <Row>
              <Col md={12}>
                <div className="player_profile_info" id="game">
                  <h1 className="primary_heading">Game Stats</h1>
                  <div className="stats_bg">
                    <div className="d-flex align-items-center">
                      <div className="statics">
                        <h4 className="sub_heading">GAMES PLAYTED</h4>
                        <h5>60</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">WON</h4>
                        <h5>40</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">LOST</h4>
                        <h5>20</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">WIN %</h4>
                        <h5>66.67%</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="player_profile_info" id="tournaments">
                  <h1 className="primary_heading">Tournament Stats</h1>
                  <div className="stats_bg">
                    <div className="d-flex align-items-center">
                      <div className="statics">
                        <h4 className="sub_heading">TOURNMENTS PLAYED</h4>
                        <h5>3</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">TOURNAMENTS WON</h4>
                        <h5>1</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">WIN STREAK</h4>
                        <h5>6</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">CHAMPIONSHIPS WON</h4>
                        <h5>-</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">RANK</h4>
                        <h5>Alpha</h5>
                      </div>
                      <div className="statics">
                        <h4 className="sub_heading">ACHIEVEMENT</h4>
                        <h5>Pro Champion</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mini-info mt-0" id="inventory">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="heading_viewAll">
                      <h3>Inventory</h3>
                    </div>
                    <div className="heading_viewAll">
                      <a
                        className="primary hk_btn_with_bg_theme"
                        onClick={viewAllInventory}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <InventoryCards />
                </div>
                <div className="player_profile_info" id="earnings">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="earning_inner">
                      <h1 className="primary_heading">Earnings</h1>
                    </div>
                    <div className="earning_inner profile_setting_left">
                      <Form.Group className="mb-3">
                        <Form.Select id="filter">
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Yearly</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="chart_bg">
                    <p className="primary_paragraph">TOTAL EARNINGS</p>
                    <div className="d-flex align-items-center">
                      <div className="inner_chart_info">
                        <img src={PriceIcon} alt="Price-Icon" />
                      </div>
                      <div className="inner_chart_info">
                        <h5>600 USDT</h5>
                      </div>
                    </div>
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                    />
                  </div>
                </div>
                <div id="match">
                  <div className="player_profile_info mt-5">
                    <div className="earning_inner">
                      <h1 className="primary_heading mb-1">Match History</h1>
                    </div>
                  </div>
                  <Table
                    striped
                    responsive="sm"
                    variant="dark hk_table_full mt-0 hk_history"
                  >
                    <thead>
                      <tr>
                        <th>
                          <p className="primary_paragraph">AVATAR USED</p>
                        </th>
                        <th colSpan={2}>
                          <p className="primary_paragraph">RESULTS</p>
                        </th>
                        <th>
                          <p className="primary_paragraph">GAME TYPE</p>
                        </th>
                        <th>
                          <p className="primary_paragraph">DURATION</p>
                        </th>
                        <th>
                          <p className="primary_paragraph">
                            SCORE{' '}
                            <span className="info_icon">
                              <i className="fa-solid fa-circle-info"></i>
                            </span>
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <MatchHistory />
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>

          {/* <Row>
            <Tabs
              defaultActiveKey="global"
              id="uncontrolled-tab-example"
              className="mb-3 hk_nav_tabs"
            >
              <Tab eventKey="global" title="GAME">
                <Container>
                  <div className="player_profile_info">
                    <h1 className="primary_heading">Game Stats</h1>
                    <div className="stats_bg">
                      <div className="d-flex align-items-center">
                        <div className="statics">
                          <h4 className="sub_heading">GAMES PLAYTED</h4>
                          <h5>60</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">WON</h4>
                          <h5>40</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">LOST</h4>
                          <h5>20</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">WIN %</h4>
                          <h5>66.67%</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </Tab>
              <Tab eventKey="stats" title="TOURNAMENT STATS">
                <Container>
                  <div className="player_profile_info">
                    <h1 className="primary_heading">Tournament Stats</h1>
                    <div className="stats_bg">
                      <div className="d-flex align-items-center">
                        <div className="statics">
                          <h4 className="sub_heading">TOURNMENTS PLAYED</h4>
                          <h5>3</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">TOURNAMENTS WON</h4>
                          <h5>1</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">WIN STREAK</h4>
                          <h5>6</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">CHAMPIONSHIPS WON</h4>
                          <h5>-</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">RANK</h4>
                          <h5>Alpha</h5>
                        </div>
                        <div className="statics">
                          <h4 className="sub_heading">ACHIEVEMENT</h4>
                          <h5>Pro Champion</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </Tab>
              <Tab eventKey="inventory" title="INVENTORY">
                <Container>
                  <div className="mini-info mt-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3>Inventory</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/inventory">View All</Link>
                      </div>
                    </div>
                  </div>
                
                  <InventoryCards />
                </Container>
              </Tab>
              <Tab eventKey="earnings" title="EARNINGS">
                <Container>
                  <div className="player_profile_info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="earning_inner">
                        <h1 className="primary_heading">Earnings</h1>
                      </div>
                      <div className="earning_inner profile_setting_left">
                        <Form.Group className="mb-3">
                          <Form.Select id="filter">
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="chart_bg">
                      <p className="primary_paragraph">TOTAL EARNINGS</p>
                      <div className="d-flex align-items-center">
                        <div className="inner_chart_info">
                          <img src={PriceIcon} alt="Price-Icon" />
                        </div>
                        <div className="inner_chart_info">
                          <h5>600 USDT</h5>
                        </div>
                      </div>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />
                    </div>
                  </div>
                </Container>
              </Tab>
              <Tab eventKey="history" title="MATCH HISTORY">
                <Container>
                  <div className="player_profile_info mt-5">
                    <div className="earning_inner">
                      <h1 className="primary_heading mb-1">Match History</h1>
                    </div>
                  </div>
                  <Table
                    striped
                    responsive="sm"
                    variant="dark hk_table_full mt-0 hk_history"
                  >
                    <thead>
                      <tr>
                        <th>
                          <p className="primary_paragraph">AVATAR USED</p>
                        </th>
                        <th colSpan={2}>
                          <p className="primary_paragraph">RESULTS</p>
                        </th>
                        <th>
                          <p className="primary_paragraph">GAME TYPE</p>
                        </th>
                        <th>
                          <p className="primary_paragraph">DURATION</p>
                        </th>
                        <th>
                          <p className="primary_paragraph">
                            SCORE{" "}
                            <span className="info_icon">
                              <i className="fa-solid fa-circle-info"></i>
                            </span>
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
                      <Pagination.Prev className="prev_next" />
                      <Pagination>{items}</Pagination>
                      <Pagination.Next className="prev_next" />
                    </Pagination>
                  </Col>
                </Container>
              </Tab>
            </Tabs>
          </Row> */}
        </Container>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setPutOnMarket={setPutOnMarket}
        setOwnerRentModal={setOwnerRentModal}
        setModalShow={setModalShow}
      />
      <OwnerRentModalDialog
        show={ownerRentModal}
        onHide={() => setOwnerRentModal(false)}
        setPutOnMarket={setPutOnMarket}
        setOwnerRentModal={setOwnerRentModal}
      />
      <PutOnMarketModal
        show={putOnMarket}
        onHide={() => setPutOnMarket(false)}
        setOwnerRentModal={setOwnerRentModal}
        setPutOnMarket={setPutOnMarket}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
      <PutOnMarketCongratsModal
        show={putOnMarketCongrats}
        onHide={() => setPutOnMarketCongrats(false)}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
      <PutOnMarketCongratsModal
        show={putOnMarketCongrats}
        onHide={() => setPutOnMarketCongrats(false)}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
    </div>
  );
};

export default ProfilePlayer;
