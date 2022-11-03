import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

import LoginModal from '../Modals/Login/LoginModal';
import ForgetPasswordModal from '../Modals/ForgetPassword/ForgetPasswordModal';
import SignUpModal from '../Modals/Signup/SignupModal';
import ResetPasswordModal from '../Modals/ResetPassword/ResetPasswordModal';
import VerificationModal from '../Modals/Verification/VerificationModal';
import Dropdown from 'react-bootstrap/Dropdown';
import User from '../../assets/img/user.png';
import Taunt from '../../assets/img/taunt.png';
import Plus from '../../assets/img/plus.png';
import PriceIcon from '../../assets/img/price_icon.png';
import { selectUser } from '../../store/user/user.selectors';
import AddInGameCurrencyModal from '../Modals/AddInGameCurrency/AddInGameCurrencyModal';
import { signOut } from '../../store/user/user.action';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'español',
    country_code: 'es',
  },
  {
    code: 'ru',
    name: 'русский',
    country_code: 'ru',
  },
  {
    code: 'de',
    name: 'deutsch',
    country_code: 'de',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    country_code: 'pt',
  },
  {
    code: 'it',
    name: 'italiano',
    country_code: 'it',
  },
  {
    code: 'in',
    name: 'భారతదేశం',
    country_code: 'in',
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'sa',
    dir: 'rtl',
  },
  {
    code: 'pk',
    name: 'پاکستان',
    country_code: 'pk',
    dir: 'rtl',
  },
];

const HeaderRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
  }, [currentLanguage]);

  const user = useSelector(selectUser);

  const [modalShowForgetPassword, setModalShowForgetPassword] = useState(false);
  const [modalShowVerification, setModalShowVerification] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShowResetPassword, setModalShowResetPassword] = useState(false);

  const [modalShowSignup, setModalShowSignup] = useState(false);

  const [addCurrencyModal, setAddCurrencyModal] = useState(false);

  const logout = () => {
    dispatch(signOut());
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (
      modalShow ||
      modalShowSignup ||
      modalShowForgetPassword ||
      modalShowVerification ||
      modalShowResetPassword
    ) {
      document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-hidden');
    }
  }, [
    modalShow,
    modalShowSignup,
    modalShowForgetPassword,
    modalShowVerification,
    modalShowResetPassword,
  ]);

  const currencyModalHandler = () => {
    setAddCurrencyModal(true);
  };

  return (
    <div className="header_right d-flex">
      {user ? (
        <>
          <button
            className="btn btn-primary header_custom_button_style sepearate_color"
            onClick={currencyModalHandler}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center header_custom_button">
                <img src={Plus} alt="Add" className="plus" />
                <h6>2000</h6>
              </div>
              <div className="header_custom_button">
                <img src={PriceIcon} alt="taunt" />
              </div>
            </div>
          </button>
          <Dropdown className="profile_dropdown">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              <img src={User} alt="profile" />
            </Dropdown.Toggle>

            <Dropdown.Menu defaultActiveKey="player-profile">
              <Dropdown.Item
                as={Link}
                to="/player-profile"
                eventKey="1"
                activeClassName="active"
              >
                My Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/" eventKey="2">
                Connect Wallet
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="" eventKey="3">
                My Avatar
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/profile-setting" eventKey="4">
                Settings
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Signout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ) : (
        <Button
          variant="primary hk_btn_with_bg_theme with_white_theme_bg"
          onClick={() => setModalShow(true)}
        >
          {i18next.t('header_right_login_button')}
        </Button>
      )}

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setLoginModalShow={setModalShow}
        setModalShowForgetPassword={setModalShowForgetPassword}
        setModalShowSignup={setModalShowSignup}
      />

      <ResetPasswordModal
        show={modalShowResetPassword}
        onHide={() => setModalShowResetPassword(false)}
        setModalShowForgetPassword={setModalShowForgetPassword}
      />

      <VerificationModal
        show={modalShowVerification}
        onHide={() => setModalShowVerification(false)}
      />

      <ForgetPasswordModal
        show={modalShowForgetPassword}
        onHide={() => setModalShowForgetPassword(false)}
        setModalShowForgetPasswords={setModalShowForgetPassword}
        setModalShowResetPasswords={setModalShowResetPassword}
      />

      <SignUpModal
        show={modalShowSignup}
        onHide={() => setModalShowSignup(false)}
        setLoginModalShow={setModalShow}
        setModalShowSignup={setModalShowSignup}
      />

      <AddInGameCurrencyModal
        show={addCurrencyModal}
        onHide={() => setAddCurrencyModal(false)}
      />

      <div className="lang_selector">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <span
              className={`flag-icon flag-icon-${currentLanguage.country_code} mx-2 hk_top`}
            ></span>
          </Dropdown.Toggle>
          <div></div>
          <Dropdown.Menu>
            {languages.map(({ code, name, country_code }) => (
              <Dropdown.Item
                key={country_code}
                onClick={() => i18next.changeLanguage(code)}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                ></span>
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderRight;
