import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

const DominoGameComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Accordion className="faqs_accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h1 className="primary_heading">
              {i18next.t('faq_general_tab_heading')}
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4 className="sub_heading">
              {' '}
              {i18next.t('faq_general_tab_para')}
            </h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h1 className="primary_heading">
              {i18next.t('faq_general_tab_heading')}
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4 className="sub_heading">{i18next.t('faq_general_tab_para')}</h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h1 className="primary_heading">
              {i18next.t('faq_general_tab_heading')}
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4 className="sub_heading">{i18next.t('faq_general_tab_para')}</h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h1 className="primary_heading">
              {i18next.t('faq_general_tab_heading')}
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4 className="sub_heading">{i18next.t('faq_general_tab_para')}</h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h1 className="primary_heading">
              {i18next.t('faq_general_tab_heading')}
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4 className="sub_heading">{i18next.t('faq_general_tab_para')}</h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h1 className="primary_heading">
              {i18next.t('faq_general_tab_heading')}
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            <h4 className="sub_heading">{i18next.t('faq_general_tab_para')}</h4>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default DominoGameComponent;
