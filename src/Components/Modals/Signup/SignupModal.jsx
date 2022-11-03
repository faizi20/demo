import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import Eye from '../../../assets/img/eye_hidden.svg';

import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";

import { signUpAsync } from "../../../store/user/user.action";
import { toggleSignUpModal } from "../../../store/ui/actions/uiAction";

import Metamask from "../../../assets/img/metamask.png";
import Binance from "../../../assets/img/binance.png";
import { uiSelector } from "../../../store/ui/selectors/uiSelectors";

function SignUpModal(props) {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eye");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isTermsOfServiceAndPrivacyPolicyAccepted: false,
  };

  const [formValues, setFromValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  const show = () => {
    type === "password" ? setType("text") : setType("password");
    icon === "eye" ? setIcon("eye-hid") : setIcon("eye");
  };

  const handleLogin = () => {
    props.setLoginModalShow(true);
    props.setModalShowSignup(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "isTermsOfServiceAndPrivacyPolicyAccepted") {
      console.log(value);

      setFromValues({
        ...formValues,
        [name]: value === "on",
      });
    } else {
      setFromValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(signUpAsync(formValues));
      dispatch(toggleSignUpModal(false, props.setModalShowSignup(false)));
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email Format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password must be not more than 10 characters!";
    }
    return errors;
  };

  const signUpWithGmail = () => {
    window.location.replace(
      `${import.meta.env.VITE_APP_API_BASE_URL}/auth/google`
    );
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg hk_bottom_border_set signup_after_modal"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <div className="login_right signup">
              <div className="login_right_content">
                <h1 className="primary_heading">
                  {" "}
                  {i18next.t("signup_modal_head")}
                </h1>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="hk_custom_style"
                >
                  <Row>
                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                    >
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder={t("signup_modal_firstname")}
                        required
                        value={formValues.firstName}
                        onChange={handleChange}
                      />
                      <p className="hk_error">{formErrors.firstName}</p>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                    >
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder={t("signup_modal_lastname")}
                        required
                        value={formValues.lastName}
                        onChange={handleChange}
                      />
                      <p className="hk_error">{formErrors.lastName}</p>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder={t("signup_modal_email")}
                      required
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <p className="hk_error">{formErrors.email}</p>
                  </Form.Group>
                  <Form.Group className="mb-3 position-relative">
                    <Form.Control
                      type={type}
                      name="password"
                      placeholder={t("signup_modal_password")}
                      required
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <span className="eye-icon"><img src={Eye} class={icon} onClick={show} alt="eye" />
                    </span>
                    <p className="hk_error">{formErrors.password}</p>
                  </Form.Group>

                  <Form.Group className="mb-3 hk_terms">
                    <Form.Check
                      required
                      label=" I accept Dominos terms of service and Privacy Policy"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      name="isTermsOfServiceAndPrivacyPolicyAccepted"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button
                    className="primary hk_btn_with_bg_theme w-100 cheap_yellow"
                    type="submit"
                  >
                    {i18next.t("signup_modal_signupbtn")}
                  </Button>
                </Form>
                <div className="divider_text">
                  <hr />
                  <label>Or</label>
                  <hr />
                </div>
                <Button
                  onClick={signUpWithGmail}
                  className="primary hk_btn_with_bg_theme with_gmail w-100 mb-3"
                >
                  {i18next.t("signup_modal_withgmail")}
                </Button>
                {/* <Button className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3">
                  <img src={Metamask} alt="Metamask" />
                  {i18next.t('signup_modal_metamask')}
                </Button>
                <Button className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3 text-uppercase">
                  <img src={Binance} alt="Binance" />
                  {i18next.t('signup_modal_binance')}
                </Button> */}
                <h6
                  className="already_have_acc w-100 mb-3"
                  onClick={handleLogin}
                >
                  {i18next.t("signup_modal_alreadyacc")}
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
