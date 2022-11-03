import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useTranslation, withTranslation, Trans } from "react-i18next";

import i18next from "i18next";

import Filter from "../../assets/img/filter.png";
import MarketPlaceGirl from "../../assets/img/market_place_girl.png";
import TShirt from "../../assets/img/t_shirt.png";
import AvatarCards from "./Avatar/AvatarCards";
import GamingCards from "./Gaming/GamingCards";
import ItemCards from "./Item/ItemCards";
import MarketPlaceSidebar from "../../Components/Sidebar/MarketPlaceSidebar/MarketPlaceSidebar";

// import { selectUser } from '../../store/user/user.selectors';

const Marketplace = () => {
  const { t } = useTranslation();
  // const user = useSelector(selectUser);

  return (
    <>
      <section className="market_place_top_bg">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div>
                <h4 className="sub_heading"> {i18next.t("market_place")}</h4>
                <h1 className="a-collection">
                  {i18next.t('let_make_a')}<span className="d-block">{i18next.t('collection')}</span>
                </h1>
                <h1 className="f-avatar">
                  {i18next.t('create_your_first')}
                  <span className="d-block">{i18next.t('mp_sidebar_option1_opt2')}</span>
                </h1>
                <p className="primary_paragraph">
                  {i18next.t('to_join_the_fun')}
                </p>
                <Button variant="primary hk_btn_with_bg_theme">
                  {t("create_avatar")}
                </Button>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <div className="t-shirt my_animation">
                  <img src={TShirt} alt="" />
                </div>
                <div className="girl-image">
                  <img src={MarketPlaceGirl} alt="Girl-Character" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <div className="page_header change_for_sidebar pt-0 marketplace_arabic_ver">
        <Container fluid>
          <Row>
            <Col lg={2} md={3} xs={3} className="px-0">
              <div className="sidebar_main">
                <MarketPlaceSidebar />
              </div>
            </Col>
            <Col lg={10}
              md={9} xs={9}
              className="pt-5 mt-5 pb-5 mb-5 hk_padding_rightside_with_sidebar"
            >
              <Row>
                <Col md={12}>
                  <div className="page_main_info text-start">
                    <h4 className="sub_heading">
                      {i18next.t('marketplace_banner_subhead')}
                    </h4>
                    <h1 className="primary_heading w-100">
                      {i18next.t('marketplace_banner_main_head')}
                    </h1>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="hk_main_filter_area market_change_design flex_wrap_custom">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </InputGroup.Text>
                      <Form.Control
                        placeholder={t('marketplace_banner_main_search')}
                        aria-describedby="basic-addon1"
                      />
                      <Form.Group className="mb-3">
                        <Form.Select>
                          <span>
                            <img src={Filter} alt="Filter" />
                          </span>
                          <option>
                            {' '}
                            {i18next.t('marketplace_banner_sortby')}
                          </option>
                          <option>
                            {' '}
                            {i18next.t('marketplace_banner_sortby_acc')}
                          </option>
                          <option>
                            {' '}
                            {i18next.t('marketplace_banner_sortby_dec')}
                          </option>
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
                        <h3> {i18next.t('marketplace_avatar_head')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/avatar">
                          {' '}
                          {i18next.t('marketplace_viewall')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <AvatarCards />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3> {i18next.t('marketplace_gaminghouse_head')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/gaming">
                          {' '}
                          {i18next.t('marketplace_viewall')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <GamingCards />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="mini-info">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="heading_viewAll">
                        <h3> {i18next.t('marketplace_items_head')}</h3>
                      </div>
                      <div className="heading_viewAll">
                        <Link to="/marketplace/item">
                          {' '}
                          {i18next.t('marketplace_viewall')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <ItemCards />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
};

export default Marketplace;
