import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { nftSelectors } from '../../store/nft/selectors/nftSelectors';
import { useSelector, useDispatch } from 'react-redux';

import Type from '../../assets/img/type.png';
import Class from '../../assets/img/class.png';
import Card from 'react-bootstrap/Card';
import PriceIcon from '../../assets/img/price_icon.png';
import CardBadge from '../../assets/img/card_badge1.png';
import { nftDirectRentModalDetails } from '../../store/nft/actions/nftAction';
import MyVerticallyCenteredModal from '../../Components/Modals/DirectRental/DirectRentalModal';
import OwnerRentModalDialog from '../../Components/Modals/OwnerRental/OwnerRentalModal';
import PutOnMarketModal from '../../Components/Modals/PutOnMarket/PutOnMarket';
import PutOnMarketCongratsModal from '../../Components/Modals/PutOnMarketCongrats/PutOnMarketCongratsModal';

const PlayerProfileSingle = props => {
  const dispatch = useDispatch();
  const nft = useSelector(nftSelectors);
  const [modalShow, setModalShow] = useState(false);
  const [ownerRentModal, setOwnerRentModal] = useState(false);
  const [putOnMarket, setPutOnMarket] = useState(false);
  const [putOnMarketCongrats, setPutOnMarketCongrats] = useState(false);

  const buyNftModalHandler = () => {
    setModalShow(true);

    dispatch(
      nftDirectRentModalDetails({
        id: nft.id,
        name: nft.name,
        image: nft.image,
      })
    );
  };

  return (
    <div className="page_header market_single for_ar_ver">
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <div className="single_product_left">
              <h1 className="primary_heading">{nft.name}</h1>
              <p className="copy_clipboard">
                0xe4d....d970
                <span>
                  <i className="fa-solid fa-clone"></i>
                </span>
              </p>
              <div className="description">
                <div className="d-flex align-items-center">
                  <div className="desc_details">
                    <h5>
                      5 <span>minted</span>
                    </h5>
                  </div>
                  <div className="desc_details">
                    <h5>
                      {nft.points} <span>for sale</span>
                    </h5>
                  </div>
                  <div className="desc_details">
                    <h5>
                      @gamertech <span>owner</span>
                    </h5>
                  </div>
                </div>
                <div className="desc_content">
                  <h6>Description</h6>
                  <p className="primary_paragraph">
                    If you want to buy an NFT, there are several public
                    platforms that offer to buy, sell, and trade NFTs.
                  </p>
                </div>
              </div>
              <div className="type_class">
                <div className="d-flex algin-items-center">
                  <div className="typeinner">
                    <p className="primary_paragraph">TYPE</p>
                    <div className="d-flex align-items-center">
                      <div className="type_image_content">
                        <img src={Type} alt="Type" />
                      </div>
                      <div className="type_image_content">
                        <h6>Avatar</h6>
                      </div>
                    </div>
                  </div>
                  <div className="typeinner">
                    <p className="primary_paragraph">CLASS</p>
                    <div className="d-flex align-items-center">
                      <div className="type_image_content">
                        <img src={Class} alt="Class" />
                      </div>
                      <div className="type_image_content">
                        <h6>Class 2</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="type_bottom">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="type_bottom_content">
                      <p className="primary_paragraph">CURRENT PRICE</p>
                      <div className="d-flex align-items-center">
                        <Card.Text className="card_price">
                          <img src={PriceIcon} alt="icon-price" /> {nft.price}
                          <span>{nft.priceUSDT} USDT</span>
                        </Card.Text>
                      </div>
                    </div>
                    <div className="type_bottom_content">
                      <Button
                        className="text-uppercase"
                        variant="primary hk_btn_with_bg_theme"
                        onClick={buyNftModalHandler}
                      >
                        Put on Market
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="single_product_right">
              <Card>
                <Card.Img variant="top small_right" src={CardBadge} />
                <div className="title_img">
                  <Card.Img variant="top" src={nft.image} />
                  <div className="type_bottom_content">
                    <Button variant="primary hk_btn_with_bg_theme customize_btn">
                      CUSTOMIZE
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setPutOnMarket={setPutOnMarket}
        setOwnerRentModal={setOwnerRentModal}
        setModalShow={setModalShow}
      />
      <OwnerRentModalDialog
        show={ownerRentModal}
        onHide={() => setOwnerRentModal(false)}
        setPutOnMarket={setPutOnMarket}
        setOwnerRentModal={setOwnerRentModal}
      />
      <PutOnMarketModal
        show={putOnMarket}
        onHide={() => setPutOnMarket(false)}
        setOwnerRentModal={setOwnerRentModal}
        setPutOnMarket={setPutOnMarket}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
      <PutOnMarketCongratsModal
        show={putOnMarketCongrats}
        onHide={() => setPutOnMarketCongrats(false)}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
      <PutOnMarketCongratsModal
        show={putOnMarketCongrats}
        onHide={() => setPutOnMarketCongrats(false)}
        setPutOnMarketCongrats={setPutOnMarketCongrats}
      />
    </div>
  );
};

export default PlayerProfileSingle;
