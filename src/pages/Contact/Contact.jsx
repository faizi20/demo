import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Navbar,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/img/logo.png";
import DiesLeft from "../../assets/img/dies_left.png";
import DiesRight from "../../assets/img/dies_right.png";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "es",
    name: "español",
    country_code: "es",
  },
  {
    code: "ru",
    name: "русский",
    country_code: "ru",
  },
  {
    code: "de",
    name: "deutsch",
    country_code: "de",
  },
  {
    code: "pt",
    name: "Portuguese",
    country_code: "pt",
  },
  {
    code: "it",
    name: "italiano",
    country_code: "it",
  },
  {
    code: "in",
    name: "భారతదేశం",
    country_code: "in",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "pk",
    name: "پاکستان",
    country_code: "pk",
    dir: "rtl",
  },
];

const Contact = () => {
  const { t, i18n } = useTranslation();
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <div className="landing header_hk menu-hid">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="ltr_logo">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Brand as={Link} to="/" className="rtl_logo">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>

            <div className="lang_selector">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span
                    className={`flag-icon flag-icon-${
                      languages.find((lang) => lang.code === i18n.language)
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
      <section className="contact">
        <Container fluid="true">
          <Row>
            <Col md={6} className="p-0">
              <div className="leftWrp">
                <h2 className="secondary_heading">
                  Lets Talk, Whats on your mind
                </h2>
                <div className="dies1_banner for_left">
                  <img src={DiesLeft} alt="Dies" />
                </div>
                <div className="dies1_banner for_right">
                  <img src={DiesRight} alt="Dies" />
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <div className="rightWrp">
                <div className="content">
                  <Row>
                    <Col md="8" className="m-auto">
                      <h2 className="secondary_heading">Contact Us</h2>
                      <Form className="mb-5">
                        <Row>
                          <Col md={12}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                          </Col>

                          <Col md={6}>
                            <Form.Group className="mb-3" controlId="">
                              <Form.Control type="text" placeholder="Phone" />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Message"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={12} className="d-flex justify-content-end">
                            <Button variant="primary hk_btn_with_bg_theme">
                              {t("Submit")}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                      <div className="email-text">
                        <span>EMAIL US AT</span>
                        <a href="javascript:;">info@dominos.com</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="contact footer">
        <Container fluid="true">
          <Row>
            <Col md={12} className="">
              <div className="d-md-flex justify-content-between">
                <p className="copyright m-0">
                  Copyrights all right reserved dominos © 2022
                </p>
                <div className="footer_left">
                  <ul className="list-unstyled m-0">
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
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Contact;
