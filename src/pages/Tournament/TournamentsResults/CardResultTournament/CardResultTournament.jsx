import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import PriceIcon from "../../../../assets/img/price_icon.png";
import Result2 from "../../../../assets/img/r1.png";

const CardResultTournament = () => {
  return (
    <>
      <Row className="row px-5 mx-5 align-items-end">
        <Col md={4}>
          <div className="postion_result_layout second_position">
            <Card>
              <h1 className="primary_heading w-100">2nd Position</h1>
              <Card.Img variant="top" src={Result2} />
              <Card.Body className="pt-2">
                <h5>Afro Business</h5>
                <h6>PRIZE WON</h6>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="inner_won_prize">
                    <img src={PriceIcon} alt="Coin " />
                  </div>
                  <div className="inner_won_prize">
                    <span>75</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4}>
          <div className="postion_result_layout first_position">
            <Card>
              <h1 className="primary_heading w-100">Winner</h1>
              <Card.Img variant="top" src={Result2} />
              <Card.Body className="pt-2">
                <h5>Afro Business</h5>
                <h6>PRIZE WON</h6>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="inner_won_prize">
                    <img src={PriceIcon} alt="Coin " />
                  </div>
                  <div className="inner_won_prize">
                    <span>100</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={4}>
          <div className="postion_result_layout third_position">
            <Card>
              <h1 className="primary_heading w-100">3rd Position</h1>
              <Card.Img variant="top" src={Result2} />
              <Card.Body className="pt-2">
                <h5>Afro Business</h5>
                <h6>PRIZE WON</h6>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="inner_won_prize">
                    <img src={PriceIcon} alt="Coin " />
                  </div>
                  <div className="inner_won_prize">
                    <span>25</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CardResultTournament;
