import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer_left">
                <p>{i18next.t("footer_copy_right")}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer_left">
                <ul className="footer_links">
                  <li>
                    <a href="#">{i18next.t('help_menu')}</a>
                  </li>
                  <li>
                    <a href="#">{i18next.t('about_menu')}</a>
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
    </>
  );
};

export default Footer;
