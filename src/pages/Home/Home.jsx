import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ScrollAnimation from 'react-animate-on-scroll';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';
import Card from 'react-bootstrap/Card';

import VideoPlaceholderDummy from '../../assets/img/video_dummy.png';
import Character1 from '../../assets/img/join_table_charc1.png';
import Character2 from '../../assets/img/join_table_char2.png';
import Table from '../../assets/img/join_table_dies.png';
import JoinCharacter from '../../assets/img/join_character.png';
import SmallDies from '../../assets/img/dies1.png';
import WhoWeAreChar from '../../assets/img/who_we_are.png';
import WhoWeAreDies from '../../assets/img/who_we_dies.png';
import AvatarBuilder from '../../assets/img/avatar_builder.png';
import AvatarBuilderAr from '../../assets/img/avatar_builder_ar.png';
import BottomDiesBig from '../../assets/img/join_bottom_dies.png';
import TenCharacter from '../../assets/img/10_character.png';
import DiesLeft from '../../assets/img/banner_left_dies.png';
import DiesRight from '../../assets/img/banner_left_right.png';
import BannerCharacterBig from '../../assets/img/banner_character.png';
import BannerCharacterBigAr from '../../assets/img/banner_character_ar.png';
import PriceIcon from '../../assets/img/price_icon.png';

import '../../i18next';
import CardItem from '../../assets/img/cardi.png';
import CardItem2 from '../../assets/img/cardi2.png';
import CardItem3 from '../../assets/img/cardi3.png';
import CardItem4 from '../../assets/img/cardi4.png';
import CardItem5 from '../../assets/img/cardi5.png';
import { selectUser } from '../../store/user/user.selectors';
import UpcomingTournaments from '../Tournament/UpcomingTournaments/UpcomingTournaments';

const Home = () => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

  return (
    <>
      <section className="banner_bg banner-m-center">
        <Container>
          <Row>
            <Col lg={5} md={12}>
              <div className="banner_left">
                <h4 className="sub_heading">{i18next.t("banner_sub_head")}</h4>
                <h1 className="primary_heading">
                  <Trans i18nKey="banner_main_head">
                    &nbsp; <span></span>
                  </Trans>
                </h1>
                <p className="primary_paragraph">
                  {i18next.t("banner_main_para")}
                </p>
                {user ? (
                  <Button variant="primary hk_btn_with_bg_theme">
                    {i18next.t("banner_playbutton")}
                  </Button>
                ) : (
                  <Button variant="primary hk_btn_with_bg_theme">
                    {i18next.t("banner_button")}
                  </Button>
                )}
              </div>
            </Col>
            <Col lg={7} md={12}>
              <div className="banner_right">
                {/* <video></video> */}
                <div className="for_video">
                  <img src={VideoPlaceholderDummy} alt="video" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="for_chara my_animation">
          <img src={BannerCharacterBig} alt="Boy-Character" />
        </div>
        <div className="dies1_banner my_animation">
          <img src={DiesLeft} alt="Dies" />
        </div>
        <div className="dies1_banner for_right my_animation2">
          <img src={DiesRight} alt="Dies" />
        </div>
      </section>

      <section className="join_battle">
        <Container>
          <Row>
            <Col md={24}>
              <div className="center_content">
                <h4 className="sub_heading">{i18next.t('join_tour')}</h4>
                <h1 className="primary_heading w-auto">{i18next.t('upcoming_tour')}</h1>
              </div>
            </Col>
          </Row>
          <UpcomingTournaments />
          <Row>
            <Col md={24} className="d-flex justify-content-center">
              <Link to="/tournaments" className="join_tournament_btn">
                {i18next.t('see_more')}
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="center_content">
                <h4 className="sub_heading">
                  {i18next.t("after_banner_section_sub_head")}
                </h4>
                <h1 className="primary_heading">
                  {i18next.t("after_banner_section_main_head")}
                </h1>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="d-flex">
                <div className="join_char_controller e1 my_animation">
                  <img src={Character1} alt="Character" />
                </div>
                <div className="join_char_controller mt-md-5 pt-4 ">
                  <h3>{i18next.t("after_banner_section_smith")}</h3>
                  <h5>
                    <span>
                      {i18next.t("after_banner_section_smith_points")}
                    </span>
                  </h5>
                </div>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="d-flex">
                <div className="join_char_controller mt-md-5 pt-4 e2">
                  <h3>{i18next.t("after_banner_section_monster")}</h3>
                  <h5>
                    <span>
                      {i18next.t("after_banner_section_monster_points")}
                    </span>
                  </h5>
                </div>
                <div className="join_char_controller my_animation">
                  <img src={Character2} alt="Character" />
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="table_position">
                <img src={Table} alt="Table" />
              </div>
            </Col>
            <Col md={12}>
              <div className="after_table d-flex">
                <div className="inner_content my_animation">
                  <img src={JoinCharacter} alt="character" />
                </div>
                <div className="inner_content mt-5 pt-2">
                  <div className="join_char_controller">
                    <h3>{i18next.t("after_banner_section_smith")}</h3>
                    <h5>
                      <span>
                        {i18next.t("after_banner_section_smith_points")}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="inner_content mt-4">
                  <img src={SmallDies} alt="character" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="cards_section_inner">
                <h4 className="sub_heading">
                  {i18next.t("customized_sub_head")}
                </h4>
                <h1 className="primary_heading">
                  {i18next.t("customized_main_head")}
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg_blur">
          <Row>
            <Col md={12}>
              <ul>
                <ScrollAnimation animateIn="fadeInRight" duration={2}>
                  <li>
                    <img src={CardItem} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={3}>
                  <li>
                    <img src={CardItem4} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={4}>
                  <li>
                    <img src={CardItem2} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={5}>
                  <li>
                    <img src={CardItem3} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={6}>
                  <li>
                    <img src={CardItem4} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={7}>
                  <li>
                    <img src={CardItem5} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={8}>
                  <li>
                    <img src={CardItem4} alt="Card" />
                  </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" duration={9}>
                  <li>
                    <img src={CardItem3} alt="Card" />
                  </li>
                </ScrollAnimation>

                {/* <li><img src={CardItem5} alt="Card" /></li>
                                <li><img src={CardItem2} alt="Card" /></li>
                                <li><img src={CardItem4} alt="Card" /></li> */}
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      <section className="show_card">
        <Container>
          <div className="whoweare who-show">
            <Row>
              <Col lg={7} md={12} sm={12} className="order-sm">
                <div className="who_we_are who-text">
                  <h1 className="primary_heading">
                    {i18next.t("who_we_are_head")}
                  </h1>
                  <p className="primary_paragraph">
                    {i18next.t("who_we_are_para")}
                  </p>
                  {user ? (
                    <Button variant="primary hk_btn_with_bg_theme">
                      {i18next.t("banner_playbutton")}
                    </Button>
                  ) : (
                    <Button variant="primary hk_btn_with_bg_theme">
                      {i18next.t("who_we_are_button")}
                    </Button>
                  )}
                </div>
              </Col>
              <Col lg={5} md={12} sm={12}>
                <div className="who_we_are right my_animation">
                  <div className="image1-controller">
                    <img src={WhoWeAreChar} alt="Character-1" />
                  </div>
                  <div className="image2-controller">
                    <img src={WhoWeAreDies} alt="dies-2" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="avatar_builder avatar-b">
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className="avatar_builder_inner">
                  <div className="avtar_image my_animation2 ltr">
                    <img src={AvatarBuilder} alt="Avatar-Builder" />
                  </div>
                  <div className="avtar_image my_animation2 rtl">
                    <img src={AvatarBuilderAr} alt="Avatar-Builder" />
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="avatar_builder_inner who_we_are mt-5 pt-4">
                  <h1 className="primary_heading">
                    {" "}
                    {i18next.t("avatar_head")}
                  </h1>
                  <p className="primary_paragraph">
                    {i18next.t("avatar_head_para")}
                  </p>

                  {user ? (
                    <Button variant="primary hk_btn_with_bg_theme">
                      {i18next.t("banner_playbutton")}
                    </Button>
                  ) : (
                    <Button variant="primary hk_btn_with_bg_theme">
                      {i18next.t("avatar_head_button")}
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="avtar_image_dies my_animation">
          <img src={BottomDiesBig} alt="Big-Dies" />
        </div>
      </section>

      <section className="ten-characters-scrollable characters-scroll">
        <Container>
          <Row>
            <Col md={6}>
              <div className="left_area">
                <h1 className="primary_heading">
                  {i18next.t("characters_head")}
                </h1>
                <p className="primary_paragraph">
                  {i18next.t("characters_para")}
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="right_area">
                <img src={TenCharacter} alt="Mix-Character" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="join_battle_form_section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="join_battle_form_inner banner_left">
                <h4 className="sub_heading">
                  {" "}
                  {i18next.t("join_battle_sub_head")}
                </h4>
                <h1 className="primary_heading">
                  <Trans i18nKey="join_battle_main_head">
                    &nbsp; <span></span>
                  </Trans>
                </h1>
              </div>
              <Form className="for_form_bg">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder={t("join_battle_form_placeholder")}
                  />
                  <Button variant="primary hk_btn_with_bg_theme">
                    {i18next.t("join_battle_form_button")}
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
