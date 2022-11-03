import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import i18next from 'i18next';
import Select from 'react-select';

import Crypto from '../../../assets/img/crypto.png';
import Price_Icon from '../../../assets/img/price_icon.png';
import Crypto_Mini from '../../../assets/img/crypto_mini.png';
import Eth_Mini from '../../../assets/img/eth_mini.png';
import Bitcoin_Mini from '../../../assets/img/bitcoin_mini.png';

const myStyles = {
  menuList: styles => ({
    ...styles,
    background: '#07131d',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isSelected ? 'white' : 'white',
    background: isFocused ? '#000' : isSelected ? '#000' : undefined,
    zIndex: 1,
  }),
  menu: base => ({
    ...base,
    zIndex: 100,
  }),
};

const options = [
  {
    value: 'bnb',
    label: (
      <div>
        <img src={Crypto} height="30px" width="30px" />
        BNB{' '}
      </div>
    ),
  },
  {
    value: 'eth',
    label: (
      <div>
        <img src={Eth_Mini} height="30px" width="30px" />
        ETH{' '}
      </div>
    ),
  },
  {
    value: 'btc',
    label: (
      <div>
        <img src={Bitcoin_Mini} height="30px" width="30px" />
        BTC{' '}
      </div>
    ),
  },
];

function AddInGameCurrencyModal(props) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = () => {
    setSelectedOption(selectedOption.value);
    console.log(selectedOption.value);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg hk_bottom_border_set addCurrencyModal"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <div className="login_right for_single_type_modal">
              <div className="login_right_content">
                <h1 className="primary_heading">
                  {' '}
                  {i18next.t('addingame_modal_subhead')}
                </h1>
                <h2> {i18next.t('addingame_modal_head')}</h2>
                <div className="bg_coins_calc d-flex align-items-center justify-content-center">
                  <div className="icon_binance">
                    <img src={Crypto} alt="Binance" />
                  </div>
                  <div className="icon_binance">
                    <h6>200</h6>
                  </div>
                </div>

                <Form className="hk_custom_style">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={myStyles}
                  />

                  {/* <Form.Group className="mb-4">
                    <Form.Select>
                      <option>Time</option>
                      <option data-content="<img src={Crypto_Mini}/>">
                        30 Days
                      </option>
                      <option>20 Days</option>
                      <option>10 Days</option>
                    </Form.Select>
                  </Form.Group> */}

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="1200" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Email
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="calc_total_amount d-flex align-items-center justify-content-evenly mb-3">
                    <div className="img_with_calc_total d-flex align-items-center">
                      <img src={Crypto_Mini} alt="Crypto" />
                      <h6>150000</h6>
                    </div>
                    <div className="img_with_calc_total d-flex align-items-center">
                      <h6>=</h6>
                    </div>
                    <div className="img_with_calc_total d-flex align-items-center">
                      <img src={Price_Icon} alt="Domicoin" />
                      <h6>110000</h6>
                    </div>
                  </div>

                  <Button className="primary hk_btn_with_bg_theme w-100">
                    {i18next.t('addingame_modal_buynowbtn')}
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default AddInGameCurrencyModal;
