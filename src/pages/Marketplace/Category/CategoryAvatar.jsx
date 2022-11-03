import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

import Filter from '../../../assets/img/filter.png';
import AvatarCards from '../Avatar/AvatarCards';
import Badge1 from '../../../assets/img/class.png';
import Badge2 from '../../../assets/img/card_badge2.png';
import Badge3 from '../../../assets/img/class3.png';
import PriceIcon from '../../../assets/img/price_icon.png';
import i18next from 'i18next';

const CategoryAvatar = () => {
  const [class1, setIsClass1] = useState(true);
  const [class2, setIsClass2] = useState(false);
  const [class3, setIsClass3] = useState(false);

  const handleChange = () => {
    setIsClass1(current => !current);
    setIsClass2(current => !current);
    setIsClass3(current => !current);
  };

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
    <div className="category_holder">
      <div className="page_header category_page">
        <Container>
          <Row>
            <Col md={12}>
              <div className="page_main_info">
                <h4 className="sub_heading"> {i18next.t('lets_make_collection')}</h4>
                <h1 className="primary_heading">{i18next.t('avatar')}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg_change bg_dark">
        <Container>
          <Row>
            <Col md={12}>
              <div className="mini-info">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="heading_viewAll">
                    <h3>New</h3>
                  </div>
                  <div className="heading_viewAll">
                    <div className="hk_main_filter_area">
                      <InputGroup className="mb-3">
                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                          >
                            <span>
                              <img src={Filter} alt="Filter" />
                            </span>{' '}
                            Filter
                          </Dropdown.Toggle>

                          <Dropdown.Menu variant="dark">
                            <div className="my_custom_dropdown">
                              <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>Class</Accordion.Header>
                                  <Accordion.Body>
                                    <label
                                      htmlFor="class1"
                                      className="targeting"
                                    >
                                      <input
                                        type="checkbox"
                                        defaultChecked={true}
                                        value={class1}
                                        onChange={handleChange}
                                        id="class1"
                                        name="class1"
                                      />
                                      <span className="checkmark"></span>
                                      <img src={Badge1} alt="Badge1" />
                                      <span className="position-relative">
                                        Class 1
                                      </span>
                                    </label>
                                    <label
                                      htmlFor="class2"
                                      className="targeting"
                                    >
                                      <input
                                        type="checkbox"
                                        defaultChecked={true}
                                        value={class2}
                                        onChange={handleChange}
                                        id="class2"
                                        name="class2"
                                      />
                                      <span className="checkmark"></span>
                                      <img src={Badge2} alt="Badge2" />
                                      <span className="position-relative">
                                        Class 2
                                      </span>
                                    </label>
                                    <label
                                      htmlFor="class3"
                                      className="targeting"
                                    >
                                      <input
                                        type="checkbox"
                                        defaultChecked={true}
                                        value={class3}
                                        onChange={handleChange}
                                        id="class3"
                                        name="class3"
                                      />
                                      <span className="checkmark"></span>
                                      <img src={Badge3} alt="Badge3" />
                                      <span className="position-relative">
                                        Class 3
                                      </span>
                                    </label>
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                  <Accordion.Header>
                                    Price Range
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="price_box">
                                      <div className="d-flex align-items-center w-100 justify-content-between">
                                        <div className="price_elements d-flex align-items-center">
                                          <img src={PriceIcon} alt="icon" />
                                          <Form.Control type="text" />
                                        </div>
                                        <div className="price_elements">-</div>
                                        <div className="price_elements d-flex align-items-center">
                                          <img src={PriceIcon} alt="icon" />
                                          <Form.Control type="text" />
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                                <div className="heading_viewAll">
                                  <Button to="/avatar">Clear All</Button>
                                </div>
                              </Accordion>
                            </div>
                            {/* <Dropdown.Item>By Category</Dropdown.Item> */}
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                          >
                            Sort By
                          </Dropdown.Toggle>

                          <Dropdown.Menu variant="dark">
                            <Dropdown.Item active>Action</Dropdown.Item>
                            <Dropdown.Item>A to Z</Dropdown.Item>
                            <Dropdown.Item>Assending</Dropdown.Item>
                            <Dropdown.Item>Dessending</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </InputGroup>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <AvatarCards />
            </Col>
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
  );
};

export default CategoryAvatar;
