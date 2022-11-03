export const Signup = (firstName, lastName, email, password) => {
  return {
    type: "auth/SIGNUP",
    payload: {
      id: new Date().getTime(),
      firstName,
      lastName,
      email,
      password,
    },
  };
};

export const Signin = (payload) => {
  return {
    type: "auth/SIGNIN",
    payload: payload,
  };
};

export const Logout = (payload) => {
  localStorage.clear();
  return {
    type: "auth/LOGOUT",
    payload: payload,
  };
};
