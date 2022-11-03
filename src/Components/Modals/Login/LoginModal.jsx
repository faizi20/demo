import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { signInAsync } from "../../../store/user/user.action";
import { toggleSignInModal } from "../../../store/ui/actions/uiAction";
import DominoBig from "../../../assets/img/dominobig.png";
import Metamask from "../../../assets/img/metamask.png";
import Binance from "../../../assets/img/binance.png";
import Eye from '../../../assets/img/eye_hidden.svg';

function LoginModal(props) {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eye");

  const [class1, setIsClass1] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleChange = () => {
    setIsClass1((current) => !current);
  };

  const show = () => {
    type === "password" ? setType("text") : setType("password");
    icon === "eye" ? setIcon("eye-hid") : setIcon("eye");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(signInAsync({ email, password }));
    dispatch(toggleSignInModal(false, props.setLoginModalShow(false)));
  };

  const handleClick = () => {
    props.setLoginModalShow(false);
    props.setModalShowForgetPassword(true);
  };

  const handleSignup = () => {
    props.setLoginModalShow(false);
    props.setModalShowSignup(true);
  };

  const signUpWithGoogleHandler = () => {
    window.location.replace(
      `${import.meta.env.VITE_APP_API_BASE_URL}/auth/google`
    );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={5}>
            <div className="login_left">
              <div className="login_left_content">
                <img src={DominoBig} alt="Big-Logo" />
                <Button
                  className="primary hk_btn_with_bg_theme cheap_yellow text-uppercase"
                  onClick={handleSignup}
                >
                  {i18next.t("login_modal_signup_button")}
                </Button>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="login_right">
              <div className="login_right_content">
                <h1 className="primary_heading">
                  {i18next.t("login_modal_head")}
                </h1>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="hk_custom_style"
                >
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Control
                      type="text"
                      placeholder={`Email/ ${t("login_modal_username")}`}
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Username
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3 position-relative">
                    <Form.Control
                      type={type}
                      name="password"
                      placeholder={t("login_modal_password")}
                      className="pass_hk_padding_right"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />

                    <span className="eye-icon"><img src={Eye} class={icon} onClick={show} alt="eye" />
                    </span>

                    <Form.Control.Feedback type="invalid">
                      Please provide a Correct Password
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <span className="forget_pass" onClick={handleClick}>
                      {i18next.t("login_modal_forgot")}
                    </span>
                  </Form.Group>



                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
                        <h5>
                          I accept Dominos terms of service and Privacy Policy
                        </h5>
                      </span>
                    </label>
                  </Form.Group>
                  <Button
                    className="primary hk_btn_with_bg_theme w-100"
                    type="submit"
                  >
                    {i18next.t("login_modal_login_button")}
                  </Button>
                </Form>

                <div className="divider_text">
                  <hr />
                  <label> {i18next.t("login_modal_connect_with")}</label>
                  <hr />
                </div>

                <Button
                  onClick={signUpWithGoogleHandler}
                  className="primary hk_btn_with_bg_theme with_gmail w-100 mb-3"
                >
                  <label> {i18next.t("login_modal_withgmail")}</label>
                </Button>

                {/* <Button className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3">
                  <img src={Metamask} alt="Metamask" />
                  {i18next.t('login_modal_metamask')}
                </Button>

                <Button className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3">
                  <img src={Binance} alt="Binance" />
                  {i18next.t('login_modal_binance')}
                </Button> */}
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
