import React from 'react';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderLeft from './HeaderLeft';

const Header = () => {
  return (
    <header className="header">
      <Row>
        <Col>
          <HeaderLeft />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
