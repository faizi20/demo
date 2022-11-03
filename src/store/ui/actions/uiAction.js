export const toggleSignUpModal = (payload) => {
  return {
    type: "ui/TOGGLE_SIGNUP_MODAL",
    payload: payload,
  };
};

export const toggleSignUpLandingPageModal = (payload) => {
  return {
    type: "ui/TOGGLE_SIGNUP_LANDING_PAGE_MODAL",
    payload: payload,
  };
};

export const toggleSignInModal = (payload) => {
  return {
    type: "ui/TOGGLE_SIGNIN_MODAL",
    payload: payload,
  };
};
