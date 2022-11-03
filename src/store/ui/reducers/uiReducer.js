const initialState = {
  isSignUpModal: false,
  isSignInModal: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ui/TOGGLE_SIGNUP_MODAL":
      return {
        ...state,
        isSignUpModal: action.payload,
      };
    case "ui/TOGGLE_SIGNIN_MODAL":
      return {
        ...state,
        isSignInModal: action.payload,
      };
    default:
      return state;
  }
};
