import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';
import PriceIcon from '../../../assets/img/price_icon.png';

export const tours = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
];

function UpcomingTournaments() {
    const { t } = useTranslation();

    return (
        <>
            <Row className="join_tournament_card_row">
                {tours.map((tour) => (
                    <Col lg={3} md={6} className="domino-mar">
                        <Card className="bg_card_image" key={tour.id}>
                            <Card.Body>
                                <Card.Title className="text-white">
                                    {i18next.t('domino_showdown')}
                                </Card.Title>
                                <Card.Subtitle className="text_cheap_yellow">
                                    {i18next.t('game_center')}
                                </Card.Subtitle>
                                <div className="mb_10px price_icon">
                                    <div href="#" className="text-white card-link">
                                        <span>
                                            <img src={PriceIcon} />
                                        </span>
                                        100.35
                                    </div>
                                </div>
                                <div>
                                    <div href="#" className="card-link">
                                        <span className="text_green">8/64</span>
                                        {i18next.t('players_joined')}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default UpcomingTournaments
