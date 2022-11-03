import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import Filter from '../../../assets/img/filter.png';
import AvatarCards from './InventoryAvatar/AvatarCards';
import ItemCards from './InventoryItem/ItemCards';
import RentCards from './InventoryRent/RentCards';
import SaleCards from './InventorySale/SaleCards';
import MarketPlaceSidebar from '../../../Components/Sidebar/MarketPlaceSidebar/MarketPlaceSidebar';
import i18next from 'i18next';

const Inventory = () => {
  return (
    <>
      <div className="page_header change_for_sidebar pt-0 inventory_new">
        <Container fluid>
          <Row>
            <Col md={2} className="px-0">
              <div className="sidebar_main">
                <MarketPlaceSidebar />
              </div>
            </Col>
            <Col
              md={10}
              className="pt-5 mt-5 pb-5 mb-5 hk_padding_rightside_with_sidebar"
            >
              <Row>
                <Col md={12}>
                  <div className="page_main_info text-start">
                    <h4 className="sub_heading"> {i18next.t('this_is_your_collection')}</h4>
                    <h1 className="primary_heading w-100"> {i18next.t('inventory')}</h1>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="hk_main_filter_area market_change_design">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search"
                        aria-describedby="basic-addon1"
                      />
                      <Form.Group className="mb-3">
                        <Form.Select>
                          <span>
                            <img src={Filter} alt="Filter" />
                          </span>
                          <option>{i18next.t('sort_by')}</option>
                          <option>{i18next.t('ascending')}</option>
                          <option>{i18next.t('descending')}</option>
                        </Form.Select>
                      </Form.Group>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3> {i18next.t('avatar')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/avatar"> {i18next.t('view_all')}</Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <AvatarCards />
                </Col>
              </Row>
              {/* <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3>Gaming House</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/gaming">View All</Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <ItemCards />
                </Col>
              </Row> */}
              <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3> {i18next.t('items')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/item"> {i18next.t('view_all')}</Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <ItemCards />
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3> {i18next.t('on_sale')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/item"> {i18next.t('view_all')}</Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <RentCards />
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3>{i18next.t('on_rent')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/item"> {i18next.t('view_all')}</Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <SaleCards />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Inventory;
