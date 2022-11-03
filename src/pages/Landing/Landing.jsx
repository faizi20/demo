import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Dropdown,
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Carousel,
} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { useTimer } from 'react-timer-hook';

import Logo from '../../assets/img/logo.png';
import AvatarBuilder from '../../assets/img/avatar_builder.png';
import AvatarBuilderAr from '../../assets/img/avatar_builder_ar.png';
import BottomDiesBig from '../../assets/img/join_bottom_dies.png';
import landing_p_char_img_1 from '../../assets/img/landing_p_char_img_1.png';
import landing_p_char_img_2 from '../../assets/img/landing_p_char_img_2.png';
import landing_p_char_img_3 from '../../assets/img/landing_p_char_img_3.png';
import landing_p_char_img_4 from '../../assets/img/landing_p_char_img_4.png';
import landing_avatar_cust_img from '../../assets/img/landing_avatar_cust_img.png';
import landing_asset_builder_img from '../../assets/img/landing_asset_builder_img.png';
import landing_full_width_sect_banner_img from '../../assets/img/landing_full_width_sect_banner_img.png';
import landing_seasonal_decor_img from '../../assets/img/landing_seasonal_decor_img.png';
import landing_game_center_img from '../../assets/img/landing_game_center_img.png';
import landing_tbrender_img from '../../assets/img/landing_tbrender_img.png';
import landing_seasonal_decor_after_img from '../../assets/img/landing_seasonal_decor_after_img.png';
import game_center_before_img from '../../assets/img/game_center_before_img.png';
import landing_footer_register_char from '../../assets/img/landing_footer_register_char.png';
import CardItem from '../../assets/img/cardi.png';
import CardItem2 from '../../assets/img/cardi2.png';
import CardItem3 from '../../assets/img/cardi3.png';
import CardItem4 from '../../assets/img/cardi4.png';
import CardItem5 from '../../assets/img/cardi5.png';
import SignupLandingPageModal from '../../Components/Modals/SignupLandingPage/SignupLandingPageModal';
import { selectUser } from '../../store/user/user.selectors';
import cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'español',
    country_code: 'es',
  },
  {
    code: 'ru',
    name: 'русский',
    country_code: 'ru',
  },
  {
    code: 'de',
    name: 'deutsch',
    country_code: 'de',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    country_code: 'pt',
  },
  {
    code: 'it',
    name: 'italiano',
    country_code: 'it',
  },
  {
    code: 'in',
    name: 'భారతదేశం',
    country_code: 'in',
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'sa',
    dir: 'rtl',
  },
  {
    code: 'pk',
    name: 'پاکستان',
    country_code: 'pk',
    dir: 'rtl',
  },
];

const Landing = () => {
  const [modalShowSignupLandingPage, setModalShowSignupLandingPage] =
    useState(false);

  const handleSignupLandingPage = () => {
    setModalShowSignupLandingPage(true);
  };

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    if (modalShowSignupLandingPage) {
      document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-hidden');
    }
  }, [modalShowSignupLandingPage][currentLanguage]);

  const { t, i18n } = useTranslation();
  const user = useSelector(selectUser);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5700000); // 10 minutes timer

  const MyTimer = ({ expiryTimestamp }) => {
    const { seconds, minutes, hours, days } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn('onExpire called'),
    });

    return (
      <div className="counterWrp">
        <span className="counter">
          {days}
          <span className="title">{i18next.t('days')}</span>
        </span>
        <span className="counter">
          {hours}
          <span className="title">{i18next.t('hrs')}</span>
        </span>
        <span className="counter">
          {minutes}
          <span className="title">{i18next.t('mins')}</span>
        </span>
        <span className="counter">
          {seconds}
          <span className="title">{i18next.t('secs')}</span>
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="landing header_hk menu-hid ">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/landing-page" className="ltr_logo">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Brand as={Link} to="/landing-page" className="rtl_logo">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>

            <div className="lang_selector">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span
                    className={`flag-icon flag-icon-${
                      languages.find(lang => lang.code === i18n.language)
                        .country_code
                    } mx-2 hk_top`}
                  ></span>
                </Dropdown.Toggle>
                <div></div>
                <Dropdown.Menu>
                  {languages.map(({ code, name, country_code }) => (
                    <Dropdown.Item
                      key={country_code}
                      onClick={() => i18n.changeLanguage(code)}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                      ></span>
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Navbar>
      </div>
      <section className="landing_top_bg">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="text-center wi-full">
                {i18next.t('dominos')}
                <span className="d-block">{i18next.t('releasing_soon')}</span>
              </h1>
              <div>
                <Carousel indicators={false} controls={false}>
                  <Carousel.Item>
                    <img
                      className=""
                      src={landing_p_char_img_1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className=""
                      src={landing_p_char_img_2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className=""
                      src={landing_p_char_img_3}
                      alt="third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className=""
                      src={landing_p_char_img_4}
                      alt="forth slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div>
                <MyTimer expiryTimestamp={time} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="landing register_form">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <div className="">
                <h4 className="sub_heading">{i18next.t('get_notified')}</h4>
                <h1 className="primary_heading">
                  {i18next.t('register_to_get_access_on_release')}
                </h1>
                <p className="primary_paragraph">
                  {i18next.t('banner_main_para')}
                </p>
              </div>
            </Col>
            <Col md={5}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="text"
                        placeholder={i18next.t('first_name')}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="text"
                        placeholder={i18next.t('last_name')}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="email"
                        placeholder={i18next.t('email')}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="password"
                        placeholder={i18next.t('password')}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Button variant="primary hk_btn_with_bg_theme w-100">
                      {t('avatar_head_button')}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="landing landing join_battle">
        <Container>
          <Row>
            <Col md={12}>
              <div className="cards_section_inner mt-5">
                <h4 className="sub_heading">{i18next.t('about_the_game')}</h4>
                <h1 className="primary_heading">
                  {i18next.t('see_what_dominos_has_to_offer')}
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg_blur">
          <Row>
            <Col md={12}>
              <ul>
                <ScrollAnimation animateIn="fadeInRight" duration={2}>
                  <li>
                    <img src={CardItem} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={3}>
                  <li>
                    <img src={CardItem4} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={4}>
                  <li>
                    <img src={CardItem2} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={5}>
                  <li>
                    <img src={CardItem3} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={6}>
                  <li>
                    <img src={CardItem4} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={7}>
                  <li>
                    <img src={CardItem5} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={8}>
                  <li>
                    <img src={CardItem4} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={9}>
                  <li>
                    <img src={CardItem3} alt="Card" />
                  </li>
                </ScrollAnimation>
              </ul>
            </Col>
          </Row>
        </div>
        <Container>
          <Row>
            <Col md={12}>
              <div className="avatar_builder">
                <Row>
                  <Col md={6}>
                    <div className="avatar_builder_inner">
                      <div className="avtar_image my_animation2 ltr A_B">
                        <img src={AvatarBuilder} alt="Avatar-Builder" />
                      </div>
                      {/* <div className="avtar_image my_animation2 rtl">
                        <img src={AvatarBuilderAr} alt="Avatar-Builder" />
                      </div> */}
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="avatar_builder_inner who_we_are mt-5 pt-4">
                      <h1 className="primary_heading">
                        {' '}
                        {i18next.t('avatar_head')}
                      </h1>
                      <p className="primary_paragraph">
                        {i18next.t('avatar_head_para')}
                      </p>

                      <Button
                        variant="primary hk_btn_with_bg_theme"
                        onClick={handleSignupLandingPage}
                      >
                        {t('avatar_head_button')}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="world_img">
          <img src={landing_tbrender_img} alt="Dies" />
        </div>
      </section>
      <section className="landing show_card">
        <Container>
          <Row>
            <Col md={12}>
              <div className="whoweare">
                <Row className="align-items-center">
                  <Col md={7} className="ord1">
                    <div className="who_we_are">
                      <h1 className="primary_heading w-100">
                        {i18next.t('avatar_customisation')}
                      </h1>
                      <p className="primary_paragraph">
                        {i18next.t('who_we_are_para')}
                      </p>
                      <Button
                        variant="primary hk_btn_with_bg_theme"
                        onClick={handleSignupLandingPage}
                      >
                        {t('who_we_are_button')}
                      </Button>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="who_we_are right my_animation">
                      <div className="avatar_custom">
                        <img src={landing_avatar_cust_img} alt="Character-1" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="avatar_builder">
                <Row className="align-items-center">
                  <Col md={6}>
                    <div className="avatar_builder_inner">
                      <div className="avtar_image my_animation2 ltr margin-t">
                        <img
                          src={landing_asset_builder_img}
                          alt="Avatar-Builder"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="avatar_builder_inner who_we_are margin-t">
                      <h1 className="primary_heading">
                        {' '}
                        {i18next.t('asset_builder')}
                      </h1>
                      <p className="primary_paragraph">
                        {i18next.t('about_blockchain_para_split')}
                      </p>

                      <Button
                        variant="primary hk_btn_with_bg_theme"
                        onClick={handleSignupLandingPage}
                      >
                        {t('avatar_head_button')}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="avtar_image_dies">
          <img src={BottomDiesBig} alt="Big-Dies" />
        </div>
      </section>

      <section className="landing full_sec_banner">
        <Container fluid>
          <Row>
            <Col md={12}>
              <img src={landing_full_width_sect_banner_img} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="landing show_card game-cen">
        <Container>
          <Row>
            <Col md={12}>
              <div className="whoweare">
                <Row className="align-items-center">
                  <Col md={7}>
                    <div className="who_we_are">
                      <h1 className="primary_heading w-100">
                        {i18next.t('seasonal_decor')}
                      </h1>
                      <p className="primary_paragraph">
                        {i18next.t('who_we_are_para')}
                      </p>
                      <Button
                        variant="primary hk_btn_with_bg_theme"
                        onClick={handleSignupLandingPage}
                      >
                        {t('who_we_are_button')}
                      </Button>
                    </div>
                  </Col>
                  <Col md={5} className="ord1">
                    <div className="who_we_are right my_animation">
                      <div className="seasonal_decor margin-t">
                        <img
                          src={landing_seasonal_decor_img}
                          alt="Character-1"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="avatar_builder">
                <Row className="align-items-center">
                  <Col md={6} className="ord1">
                    <div className="avatar_builder_inner">
                      <div className="game_center_img my_animation2">
                        <img
                          src={landing_game_center_img}
                          alt="Avatar-Builder"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="avatar_builder_inner who_we_are margin-t">
                      <h1 className="primary_heading">
                        {' '}
                        {i18next.t('game_menu')}
                      </h1>
                      <p className="primary_paragraph">
                        {i18next.t('who_we_are_para')}
                      </p>

                      <Button
                        variant="primary hk_btn_with_bg_theme"
                        onClick={handleSignupLandingPage}
                      >
                        {t('avatar_head_button')}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="seasonal_decor_after">
          <img src={landing_seasonal_decor_after_img} alt="Dies" />
        </div>
        <div className="game_center_before">
          <img src={game_center_before_img} alt="Dies" />
        </div>
      </section>

      <section className="landing join_battle_form_section">
        <Container>
          <Row>
            <Col md={10} className="m-auto">
              <div className="register_form_footer">
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <div className="form_footer_left">
                      <h3>
                        <span>{i18next.t('join')}</span>
                        <span>{i18next.t('the')}</span>
                        <span>{i18next.t('battle')}</span>
                      </h3>
                      <img
                        className="d-sm-none d-md-none d-lg-none d-xl-block"
                        src={landing_footer_register_char}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                    <div className="form_footer_right">
                      <h4>{i18next.t('register_to_get_on_early_bird_list')}</h4>
                      <Form>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control
                                type="text"
                                placeholder={i18next.t('first_name')}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control
                                type="text"
                                placeholder={i18next.t('last_name')}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control
                                type="email"
                                placeholder={i18next.t('email')}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control
                                type="password"
                                placeholder={i18next.t('create_password')}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group
                              className="mb-3 checkbox_cus"
                              controlId=""
                            >
                              <Form.Check aria-label="option 1" />
                              <Form.Label>
                                {i18next.t('i_accept_dominos')}{' '}
                                <a href="javascript:;">
                                  {i18next.t('terms_of_service')}
                                </a>{' '}
                                {i18next.t('and')}{' '}
                                <a href="javascript:;">
                                  {i18next.t('privacy_policy')}
                                </a>
                              </Form.Label>
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Button className="primary hk_btn_with_bg_theme cheap_yellow btn btn-primary w-100">
                              {i18next.t('register')}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="join_battle_form_inner banner_left">
                <h4 className="sub_heading"> {t('join_battle_sub_head')}</h4>
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
                    {t('join_battle_form_button')}
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="landing footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer_left">
                <p>{t('footer_copy_right')}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer_left">
                <ul className="footer_links">
                  <li>
                    <Link to="/contact">{i18next.t('contact_us')}</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer_left">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SignupLandingPageModal
        show={modalShowSignupLandingPage}
        onHide={() => setModalShowSignupLandingPage(false)}
        setModalShowSignupLandingPage={setModalShowSignupLandingPage}
      />
    </>
  );
};

export default Landing;
