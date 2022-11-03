import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

import i18next from "i18next";
import { useDispatch } from "react-redux";

import { signUpAsync } from "../../../store/user/user.action";
import { toggleSignUpLandingPageModal } from "../../../store/ui/actions/uiAction";

function SignupLandingPage(props) {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

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
      dispatch(
        toggleSignUpLandingPageModal(
          false,
          props.setModalShowSignupLandingPage(false)
        )
      );
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="landing hk_assets_modal modal_light_bg hk_bottom_border_set signup_after_modal"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={5}>
            <div className="login_left signUpLandingPage" />
          </Col>
          <Col md={7}>
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
                      type="password"
                      name="password"
                      placeholder={t("signup_modal_password")}
                      required
                      value={formValues.password}
                      onChange={handleChange}
                    />
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
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default SignupLandingPage;
