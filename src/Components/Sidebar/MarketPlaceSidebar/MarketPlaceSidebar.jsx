import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import i18next from 'i18next';

import Badge1 from '../../../assets/img/class.png';
import Badge2 from '../../../assets/img/card_badge2.png';
import Badge3 from '../../../assets/img/class3.png';
import Badge4 from '../../../assets/img/class4.svg';
import PriceIcon from '../../../assets/img/price_icon.png';

const MarketPlaceSidebar = () => {
  const { t } = useTranslation();

  const [class1, setIsClass1] = useState(true);
  const [class2, setIsClass2] = useState(false);
  const [class3, setIsClass3] = useState(false);
  const [class4, setIsClass4] = useState(true);

  const [class5, setIsClass5] = useState(false);
  const [class6, setIsClass6] = useState(false);
  const [class7, setIsClass7] = useState(false);
  const [class8, setIsClass8] = useState(false);

  const handleChange = () => {
    setIsClass1(current => !current);
    setIsClass2(current => !current);
    setIsClass3(current => !current);
    setIsClass4(current => !current);
    setIsClass5(current => !current);
    setIsClass6(current => !current);
    setIsClass7(current => !current);
    setIsClass8(current => !current);
  };

  return (
    <div className="sidebar">
      <div className="my_custom_dropdown">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {i18next.t('mp_sidebar_option1_head1')}
            </Accordion.Header>
            <Accordion.Body>
              <label htmlFor="class1" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class1}
                  onChange={handleChange}
                  id="class1"
                  name="class1"
                />
                <span className="checkmark"></span>
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option1_opt1')}
                </span>
              </label>
              <label htmlFor="class2" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class2}
                  onChange={handleChange}
                  id="class2"
                  name="class2"
                />
                <span className="checkmark"></span>
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option1_opt2')}
                </span>
              </label>
              <label htmlFor="class3" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class3}
                  onChange={handleChange}
                  id="class3"
                  name="class3"
                />
                <span className="checkmark"></span>
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option1_opt3')}
                </span>
              </label>
              <label htmlFor="class4" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class4}
                  onChange={handleChange}
                  id="class4"
                  name="class4"
                />
                <span className="checkmark"></span>
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option1_opt4')}
                </span>
              </label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {' '}
              {i18next.t('mp_sidebar_option2_head1')}
            </Accordion.Header>
            <Accordion.Body>
              <label htmlFor="class5" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class5}
                  onChange={handleChange}
                  id="class5"
                  name="class5"
                />
                <span className="checkmark"></span>
                <img src={Badge1} alt="Badge1" />
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option2_opt1')}
                </span>
              </label>
              <label htmlFor="class6" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class6}
                  onChange={handleChange}
                  id="class6"
                  name="class6"
                />
                <span className="checkmark"></span>
                <img src={Badge2} alt="Badge2" />
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option2_opt2')}
                </span>
              </label>
              <label htmlFor="class7" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class7}
                  onChange={handleChange}
                  id="class7"
                  name="class7"
                />
                <span className="checkmark"></span>
                <img src={Badge3} alt="Badge3" />
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option2_opt3')}
                </span>
              </label>
              <label htmlFor="class8" className="targeting">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  value={class8}
                  onChange={handleChange}
                  id="class8"
                  name="class8"
                />
                <span className="checkmark"></span>
                <img src={Badge4} alt="Badge8" />
                <span className="position-relative">
                  {' '}
                  {i18next.t('mp_sidebar_option2_opt4')}
                </span>
              </label>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {i18next.t('mp_sidebar_option3_head1')}
            </Accordion.Header>
            <Accordion.Body>
              <div className="price_box">
                <div className="d-flex align-items-center w-100 justify-content-between">
                  <div className="price_elements d-flex align-items-center">
                    <img src={PriceIcon} alt="icon" />
                    <Form.Control type="text" placeholder="0" />
                  </div>
                  <div className="price_elements">-</div>
                  <div className="price_elements d-flex align-items-center">
                    <img src={PriceIcon} alt="icon" />
                    <Form.Control type="text" placeholder="0" />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <div className="heading_viewAll">
            <Button to="/avatar"> {i18next.t('mp_sidebar_clearall')}</Button>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default MarketPlaceSidebar;
