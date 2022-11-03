import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import i18next from 'i18next';

import { nftRentDirectModalSelectors } from '../../../store/nft/selectors/nftSelectors';
import Taunt from '../../../assets/img/taunt.png';

function MyVerticallyCenteredModal(props) {
  const { t } = useTranslation();
  const [myVal, setMyVal] = useState([]);
  const [RentalOptions, setRentalOptions] = useState([]);
  const [fixedData, setFixedData] = useState(true);
  const [divisionData, setDivisionData] = useState(false);
  const [screeningData, setScreeningData] = useState(false);
  const [directData, setDirectData] = useState(false);

  const [oneTimeSellData, setOneTimeSellData] = useState(true);
  const [rentalData, setRentalData] = useState(false);

  const handleChange = e => {
    setMyVal({ myVal: e.target.value });
    if (e.target.value === 'Rental') {
      setRentalData(true);
      setOneTimeSellData(false);
    } else {
      setRentalData(false);
      setOneTimeSellData(true);
    }
  };

  const handleChangeRentalOptions = e => {
    if (e.target.value === 'Fixed') {
      setFixedData(true);
      setDivisionData(false);
      setScreeningData(false);
      setDirectData(false);
    }
    if (e.target.value === 'Division') {
      setDivisionData(true);
      setFixedData(false);
      setScreeningData(false);
      setDirectData(false);
    }
    if (e.target.value === 'Screening') {
      setScreeningData(true);
      setFixedData(false);
      setDirectData(false);
      setDivisionData(false);
    }
    if (e.target.value === 'Direct') {
      setDirectData(true);
      setFixedData(false);
      setScreeningData(false);
      setDivisionData(false);
    }
  };

  const nftRentModal = useSelector(nftRentDirectModalSelectors);

  const handleOwnerRentModal = () => {
    props.setPutOnMarket(true);
    props.setModalShow(false);
  };
  const handleClose = () => props.setModalShow(false);

  useEffect(() => {});

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal nft_rent_form with_control_af ar_ver_modal"
    >
      <Modal.Header closeButton>
        <div className="title_image_modal">
          <img src={nftRentModal.image} alt="Character" />
        </div>
      </Modal.Header>
      <Modal.Body className="px-4 pb-0">
        <h1 className="primary_heading">{nftRentModal.name}</h1>
        <Form>
          <Form.Group className="mb-4">
            <Form.Select onChange={handleChange}>
              <option value="One Time Sell">One Time Sell</option>
              <option value="Rental">Rental</option>
            </Form.Select>
          </Form.Group>

          {oneTimeSellData && (
            <>
              <InputGroup className="mb-4">
                <InputGroup.Text
                  id="basic-addon1"
                  className="control_icon_coin"
                >
                  <img src={Taunt} alt="Taunt-Coin" />
                </InputGroup.Text>
                <Form.Control placeholder="0" className="with_input_group" />
              </InputGroup>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Earning %" />
              </Form.Group>
            </>
          )}
          {rentalData && (
            <>
              <Form.Group className="mb-4">
                <Form.Select onChange={handleChangeRentalOptions}>
                  <option value="Fixed">Fixed Rent</option>
                  <option value="Division">Division of Earnings</option>
                  <option value="Screening">Screening of Owners</option>
                  <option value="Direct">Direct Rental</option>
                </Form.Select>
              </Form.Group>
              {fixedData && (
                <>
                  <InputGroup className="mb-4">
                    <InputGroup.Text
                      id="basic-addon1"
                      className="control_icon_coin"
                    >
                      <img src={Taunt} alt="Taunt-Coin" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="0"
                      className="with_input_group"
                    />
                  </InputGroup>
                  <Form.Group className="mb-4">
                    <Form.Select>
                      <option>Time</option>
                      <option>30 Days</option>
                      <option>20 Days</option>
                      <option>10 Days</option>
                    </Form.Select>
                  </Form.Group>
                </>
              )}

              {divisionData && (
                <>
                  <Form.Group className="mb-4">
                    <Form.Select>
                      <option>Time</option>
                      <option>30 Days</option>
                      <option>20 Days</option>
                      <option>10 Days</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="text" placeholder="Earning %" />
                  </Form.Group>
                  <Form.Group className="mb-0">
                    <Form.Control
                      type="text"
                      placeholder="Financing Liquidity"
                    />
                  </Form.Group>
                </>
              )}
              {screeningData && (
                <>
                  <Form.Group className="mb-4">
                    <Form.Select>
                      <option>Time</option>
                      <option>30 Days</option>
                      <option>20 Days</option>
                      <option>10 Days</option>
                    </Form.Select>
                  </Form.Group>
                </>
              )}
              {directData && (
                <>
                  <InputGroup className="mb-4">
                    <InputGroup.Text
                      id="basic-addon1"
                      className="control_icon_coin"
                    >
                      <img src={Taunt} alt="Taunt-Coin" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="0"
                      className="with_input_group"
                    />
                  </InputGroup>
                  <Form.Group className="mb-4">
                    <Form.Select>
                      <option>Time</option>
                      <option>30 Days</option>
                      <option>20 Days</option>
                      <option>10 Days</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="text" placeholder="Earning %" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control type="text" placeholder="Intern Username" />
                  </Form.Group>
                </>
              )}
            </>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="px-2 d-flex align-items-center mt-4 w-100 rent_modal_footer">
          <Button
            variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border"
            onClick={handleClose}
          >
            CANCEL
          </Button>
          <Button
            className="primary hk_btn_with_bg_theme"
            onClick={handleOwnerRentModal}
          >
            PROCEED
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
