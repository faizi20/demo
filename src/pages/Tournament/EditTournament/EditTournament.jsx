import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Form, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';

import table_texture_img_1 from '../../../assets/img/table_texture_img_1.png';
import table_texture_img_2 from '../../../assets/img/table_texture_img_2.png';
import table_texture_img_3 from '../../../assets/img/table_texture_img_3.png';
import table_texture_img_4 from '../../../assets/img/table_texture_img_4.png';
import tileColorImg1 from '../../../assets/img/tileColorImg1.png';
import tileColorImg2 from '../../../assets/img/tileColorImg2.png';
import tileColorImg3 from '../../../assets/img/tileColorImg3.png';
import tileColorImg4 from '../../../assets/img/tileColorImg4.png';
import evironmentFloorThumb1 from '../../../assets/img/evironmentFloorThumb1.png';
import evironmentFloorThumb2 from '../../../assets/img/evironmentFloorThumb2.png';
import evironmentFloorThumb3 from '../../../assets/img/evironmentFloorThumb3.png';
import evironmentFloorThumb4 from '../../../assets/img/evironmentFloorThumb4.png';

const imgWrp = {
  objectFit: 'cover',
  height: '100%',
};
const img = {
  display: 'block',
  width: '100%',
  height: '100%',
};

const EditTournament = () => {
  const [value, onChange] = useState(new Date());
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map(file => (
    <div style={imgWrp} key={file.name}>
      <button
        type="button"
        className="btn-close cancel_logo_btn"
        aria-label="Close"
      ></button>
      <img
        src={file.preview}
        style={img}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  const [state, setState] = useState({
    tournamentName: 'Tournament Name',
    date: '2022-08-03',
    numberOfPlayers: '24',
    numberOfRounds: '12',
    entryFee: '50',
    prizePool: '50',
  });
  return (
    <div className="category_holder player_profile game_center about_page leaderboard faqs edit_tournament">
      <div className="bg_change pt-5">
        <Container fluid className="mx-5">
          <Row>
            <h2 className="secondary_heading fw-bold mb-5">Edit Tournament</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="general">
              <Row className="mb-5">
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="general">
                        <span>General</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="rules">
                        <span>Rules</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="environment">
                        <span>Environment</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="general">
                      <Row>
                        <Col sm={6}>
                          <div className="profile_setting_left">
                            <h1 className="primary_heading">General</h1>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>Tournament Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="tournamentName"
                                  placeholder="Tournament Name"
                                  value={state.tournamentName}
                                  onChange={e => setState(e.target.value)}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>Date & Time</Form.Label>
                                <DateTimePicker
                                  format="dd MMM, y, h:mm"
                                  onChange={onChange}
                                  value={value}
                                  className="form-control hk_cus_date_picker"
                                />
                              </Form.Group>

                              <div className="d-flex align-items-center mt-4">
                                <Link to={'/game-center'}>
                                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                                    CANCEL
                                  </Button>
                                </Link>
                                <Link to={'/game-center'}>
                                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                                    SAVE
                                  </Button>
                                </Link>
                              </div>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="rules">
                      <Row>
                        <Col sm={6}>
                          <div className="profile_setting_left">
                            <h1 className="primary_heading">Rules</h1>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>Number of Players</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Number of Players"
                                  value={state.numberOfPlayers}
                                  onChange={e => setState(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Number of Rounds</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Number of Rounds"
                                  value={state.numberOfRounds}
                                  onChange={e => setState(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Entry Fee</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Entry Fee"
                                  value={state.entryFee}
                                  onChange={e => setState(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Prize Pool</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Prize Pool"
                                  value={state.prizePool}
                                  onChange={e => setState(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledSelect">
                                  Rules
                                </Form.Label>
                                <Form.Select id="selectGender">
                                  <option>Rule 1</option>
                                  <option>Rule 2</option>
                                  <option>Rule 3</option>
                                </Form.Select>
                              </Form.Group>

                              <div className="d-flex align-items-center mt-4">
                                <Link to={'/game-center'}>
                                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                                    CANCEL
                                  </Button>
                                </Link>
                                <Link to={'/game-center'}>
                                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                                    SAVE
                                  </Button>
                                </Link>
                              </div>
                            </Form>
                          </div>
                        </Col>
                        <Col sm={10}>
                          <Tab.Content className="edit_tournament_tab_area">
                            <Tab.Pane eventKey="general">
                              <Row>
                                <Col sm={6}>
                                  <div className="profile_setting_left">
                                    <h1 className="primary_heading">General</h1>
                                    <Form>
                                      <Form.Group className="mb-3">
                                        <Form.Label>Tournament Name</Form.Label>
                                        <Form.Control
                                          type="text"
                                          name="tournamentName"
                                          placeholder="Tournament Name"
                                          value={state.tournamentName}
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </Form.Group>

                                      <Form.Group className="mb-3">
                                        <Form.Label>Date & Time</Form.Label>
                                        {/* <Form.Control>
                                                        <DateTimePicker format="dd MMM, y, h:mm" onChange={e => setState(e.target.value)} value={state.date} />
                                                    </Form.Control> */}
                                        <Form.Control
                                          type="date"
                                          name="date"
                                          value={state.date}
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </Form.Group>

                                      <div className="d-flex align-items-center mt-4">
                                        <Link to={'/game-center'}>
                                          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                                            CANCEL
                                          </Button>
                                        </Link>
                                        <Link to={'/game-center'}>
                                          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                                            SAVE
                                          </Button>
                                        </Link>
                                      </div>
                                    </Form>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="rules">
                              <Row>
                                <Col sm={6}>
                                  <div className="profile_setting_left">
                                    <h1 className="primary_heading">Rules</h1>
                                    <Form>
                                      <Form.Group className="mb-3">
                                        <Form.Label>
                                          Number of Players
                                        </Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Number of Players"
                                          value={state.numberOfPlayers}
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </Form.Group>
                                      <Form.Group className="mb-3">
                                        <Form.Label>
                                          Number of Rounds
                                        </Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Number of Rounds"
                                          value={state.numberOfRounds}
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </Form.Group>
                                      <Form.Group className="mb-3">
                                        <Form.Label>Entry Fee</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Entry Fee"
                                          value={state.entryFee}
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </Form.Group>
                                      <Form.Group className="mb-3">
                                        <Form.Label>Prize Pool</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Prize Pool"
                                          value={state.prizePool}
                                          onChange={e =>
                                            setState(e.target.value)
                                          }
                                        />
                                      </Form.Group>
                                      <Form.Group className="mb-3">
                                        <Form.Label htmlFor="disabledSelect">
                                          Rules
                                        </Form.Label>
                                        <Form.Select id="selectGender">
                                          <option>Rule 1</option>
                                          <option>Rule 2</option>
                                          <option>Rule 3</option>
                                        </Form.Select>
                                      </Form.Group>

                                      <div className="d-flex align-items-center mt-4">
                                        <Link to={'/game-center'}>
                                          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                                            CANCEL
                                          </Button>
                                        </Link>
                                        <Link to={'/game-center'}>
                                          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                                            SAVE
                                          </Button>
                                        </Link>
                                      </div>
                                    </Form>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="environment">
                              <Row>
                                <Col sm={7}>
                                  <div className="profile_setting_left">
                                    <h1 className="primary_heading">
                                      Environment
                                    </h1>
                                    <Form>
                                      <Form.Label>Table Structure</Form.Label>
                                      {['radio1'].map(type => (
                                        <div
                                          key={`${type}`}
                                          className="radioWrp1"
                                        >
                                          <Row>
                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-1`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-1`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={table_texture_img_1}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-2`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-2`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={table_texture_img_2}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-3`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-3`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={table_texture_img_3}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-4`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-4`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={table_texture_img_4}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>
                                          </Row>
                                        </div>
                                      ))}

                                      <Form.Label>
                                        Your Logo for Environment
                                      </Form.Label>
                                      <div className="logoUploader editTourUploader">
                                        <div
                                          {...getRootProps({
                                            className: 'dropzone p-0 h-100',
                                          })}
                                        >
                                          {/* <button type="button" className="btn-close cancel_logo_btn" aria-label="Close"></button> */}
                                          <input {...getInputProps()} />
                                          {thumbs}
                                        </div>
                                      </div>

                                      <Form.Label>Domino Color</Form.Label>
                                      {['radio2'].map(type => (
                                        <div
                                          key={`${type}`}
                                          className="radioWrp1"
                                        >
                                          <Row>
                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-1`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-1`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={tileColorImg1}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-2`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-2`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={tileColorImg2}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-3`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-3`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={tileColorImg3}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-4`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-4`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel"
                                                  type={type}
                                                >
                                                  <img
                                                    src={tileColorImg4}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>
                                          </Row>
                                        </div>
                                      ))}

                                      <Form.Label>Floor Texture</Form.Label>
                                      {['radio3'].map(type => (
                                        <div
                                          key={`${type}`}
                                          className="radioWrp1"
                                        >
                                          <Row>
                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-1`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-1`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel p-0"
                                                  type={type}
                                                >
                                                  <img
                                                    src={evironmentFloorThumb1}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-2`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-2`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel p-0"
                                                  type={type}
                                                >
                                                  <img
                                                    src={evironmentFloorThumb2}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-3`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-3`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel p-0"
                                                  type={type}
                                                >
                                                  <img
                                                    src={evironmentFloorThumb3}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>

                                            <Col>
                                              <Form.Check
                                                name={`${type}-1`}
                                                type={type}
                                                id={`${type}-4`}
                                              >
                                                <input
                                                  name={`${type}-1`}
                                                  type="radio"
                                                  id={`${type}-4`}
                                                  className="form-check-input"
                                                />
                                                <Form.Check.Label
                                                  className="radioLabel p-0"
                                                  type={type}
                                                >
                                                  <img
                                                    src={evironmentFloorThumb4}
                                                    alt="Dies"
                                                  />
                                                </Form.Check.Label>
                                              </Form.Check>
                                            </Col>
                                          </Row>
                                        </div>
                                      ))}

                                      <div className="d-flex align-items-center mt-4">
                                        <Link to={'/game-center'}>
                                          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                                            CANCEL
                                          </Button>
                                        </Link>
                                        <Link to={'/game-center'}>
                                          <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                                            SAVE
                                          </Button>
                                        </Link>
                                      </div>
                                    </Form>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="environment">
                      <Row>
                        <Col sm={7}>
                          <div className="profile_setting_left">
                            <h1 className="primary_heading">Environment</h1>
                            <Form>
                              <Form.Label>Table Structure</Form.Label>
                              {['radio1'].map(type => (
                                <div key={`${type}`} className="radioWrp1">
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-1`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-1`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img
                                            src={table_texture_img_1}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-2`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-2`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img
                                            src={table_texture_img_2}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-3`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-3`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img
                                            src={table_texture_img_3}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-4`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-4`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img
                                            src={table_texture_img_4}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>
                                  </Row>
                                </div>
                              ))}

                              <Form.Label>Your Logo for Environment</Form.Label>
                              <div className="logoUploader editTourUploader">
                                <div
                                  {...getRootProps({
                                    className: 'dropzone p-0 h-100',
                                  })}
                                >
                                  <input {...getInputProps()} />
                                  {thumbs}
                                </div>
                              </div>

                              <Form.Label>Domino Color</Form.Label>
                              {['radio2'].map(type => (
                                <div key={`${type}`} className="radioWrp1">
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-1`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-1`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img src={tileColorImg1} alt="Dies" />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-2`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-2`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img src={tileColorImg2} alt="Dies" />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-3`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-3`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img src={tileColorImg3} alt="Dies" />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-4`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-4`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel"
                                          type={type}
                                        >
                                          <img src={tileColorImg4} alt="Dies" />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>
                                  </Row>
                                </div>
                              ))}

                              <Form.Label>Floor Texture</Form.Label>
                              {['radio3'].map(type => (
                                <div key={`${type}`} className="radioWrp1">
                                  <Row>
                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-1`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-1`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel p-0"
                                          type={type}
                                        >
                                          <img
                                            src={evironmentFloorThumb1}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-2`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-2`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel p-0"
                                          type={type}
                                        >
                                          <img
                                            src={evironmentFloorThumb2}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-3`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-3`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel p-0"
                                          type={type}
                                        >
                                          <img
                                            src={evironmentFloorThumb3}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col>
                                      <Form.Check
                                        name={`${type}-1`}
                                        type={type}
                                        id={`${type}-4`}
                                      >
                                        <input
                                          name={`${type}-1`}
                                          type="radio"
                                          id={`${type}-4`}
                                          className="form-check-input"
                                        />
                                        <Form.Check.Label
                                          className="radioLabel p-0"
                                          type={type}
                                        >
                                          <img
                                            src={evironmentFloorThumb4}
                                            alt="Dies"
                                          />
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>
                                  </Row>
                                </div>
                              ))}

                              <div className="d-flex align-items-center mt-4">
                                <Link to={'/game-center'}>
                                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                                    CANCEL
                                  </Button>
                                </Link>
                                <Link to={'/game-center'}>
                                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg">
                                    SAVE
                                  </Button>
                                </Link>
                              </div>
                            </Form>
                          </div>
                        </Col>
                      </Row>
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

export default EditTournament;
