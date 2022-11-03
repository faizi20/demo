import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactFlagsSelect from 'react-flags-select';

import ProfileAvatar from '../../assets/img/profileavatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfileData } from '../../store/user/user.selectors';
import { updateUserProfileAsync } from '../../store/user/user.action';

const ProfileSetting = () => {
  const _userProfile = useSelector(selectUserProfileData);
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState(_userProfile);

  const changeCountryHandler = code =>
    setUserProfile(state => ({ ...state, country: code }));

  const chnageUserNameHandler = event =>
    setUserProfile(state => ({ ...state, userName: event.target.value }));

  const changeUserDOBHandler = event =>
    setUserProfile(state => ({ ...state, dateOfBirth: event.target.value }));

  const changeUserGenderHandler = event =>
    setUserProfile(state => ({ ...state, gender: event.target.value }));

  const saveUserProfileSettings = event => {
    event.preventDefault();
    const { email, ...payload } = userProfile;
    dispatch(updateUserProfileAsync(payload));
  };

  return (
    <div className="join_battle_form_section">
      <Container>
        <Row>
          <Col md={6}>
            <div className="profile_setting_left">
              <h1 className="primary_heading">Profile Settings</h1>
              <Form onSubmit={saveUserProfileSettings}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={chnageUserNameHandler}
                    type="text"
                    placeholder="Enter Username"
                    value={userProfile.userName}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Enter Email"
                    onChange={chnageUserNameHandler}
                    value={userProfile.email}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    onChange={changeUserDOBHandler}
                    value={userProfile.dateOfBirth.substr(0, 10)}
                    type="date"
                    placeholder="Enter date of birth"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                  <Form.Select
                    value={userProfile.gender}
                    onChange={changeUserGenderHandler}
                    id="selectGender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">Country</Form.Label>
                  <ReactFlagsSelect
                    selected={userProfile.country}
                    onSelect={changeCountryHandler}
                  />
                </Form.Group>
                <div className="d-flex align-items-center mt-4">
                  <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg only_white_border">
                    CANCEL
                  </Button>
                  <Button
                    type="submit"
                    variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg"
                  >
                    SAVE
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="profile_setting_right">
              <img src={ProfileAvatar} alt="User-Profile" />
              <Button variant="btn btn-primary hk_btn_with_bg_theme with_white_theme_bg change_avatar">
                CHANGE AVATAR
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileSetting;
