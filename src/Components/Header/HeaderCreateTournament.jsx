import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Logo from '../../assets/img/logo.png';

const HeaderCreateTournament = () => {
  const { t } = useTranslation();
  return (
    <div className="header_hk">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="ltr_logo">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Brand as={Link} to="/game-center">
            <Button variant="primary hk_btn_with_bg_theme with_white_theme_bg exit_btn_padding">
              {i18next.t('exitButton')}
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Brand as={Link} to="/" className="rtl_logo">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderCreateTournament;
