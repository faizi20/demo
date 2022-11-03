import { createAction } from '../../utils/reducer/reducer.util';
import { USER_ACTION_TYPES } from './user.type';
import { axiosInstance } from '../../utils/api/api.util';

const signUpStart = () => createAction(USER_ACTION_TYPES.SIGN_UP_START);

const signUpSuccess = payload =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, payload);

const signUpFailure = payload =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, payload);

const signUp = async payload => {
  const { data } = await axiosInstance.api.post('/auth/signUp', payload);
  return data;
};

const signInStart = () => createAction(USER_ACTION_TYPES.SIGN_IN_START);

const signInSuccess = payload =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload);

const signInFailure = payload =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, payload);

const signIn = async payload => {
  const { data } = await axiosInstance.api.post('/auth/signIn', payload);
  return data;
};

const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

const updateUserProfileStart = () =>
  createAction(USER_ACTION_TYPES.UPDATE_PROFILE_START);

const updateUserProfileSuccess = payload =>
  createAction(USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS, payload);

const updateUserProfileFailure = payload =>
  createAction(USER_ACTION_TYPES.UPDATE_PROFILE_FAILURE, payload);

const updateUserProfile = async payload => {
  const { data } = await axiosInstance.api.patch('/users/me', payload);
  return data;
};

const getUserStart = () => createAction(USER_ACTION_TYPES.GET_USER_START);

const getUserSuccess = payload =>
  createAction(USER_ACTION_TYPES.GET_USER_SUCCESS, payload);

const getUserFailure = payload =>
  createAction(USER_ACTION_TYPES.GET_USER_FAILURE, payload);

const getUser = async () => {
  const { data } = await axiosInstance.api.get('/users/me');
  return data;
};

export const signUpAsync = payload => async dispatch => {
  dispatch(signUpStart());
  try {
    const data = await signUp(payload);
    axiosInstance.resetAPI(data.accessToken);
    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(signUpFailure(error.response.data.message));
  }
};

export const signInAsync = payload => async dispatch => {
  dispatch(signInStart());
  try {
    const data = await signIn(payload);
    axiosInstance.resetAPI(data.accessToken);
    dispatch(signInSuccess(data));
  } catch (error) {
    dispatch(signInFailure(error.response.data.message));
  }
};

export const signOut = () => dispatch => dispatch(signOutSuccess());

export const updateUserProfileAsync = payload => async dispatch => {
  dispatch(updateUserProfileStart());
  try {
    const data = await updateUserProfile(payload);
    dispatch(updateUserProfileSuccess(data));
  } catch (error) {
    dispatch(updateUserProfileFailure(error.response.data.message));
  }
};

export const getUserAfterGoogleAuth = () => async dispatch => {
  dispatch(getUserStart());
  try {
    const data = await getUser();
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error.response.data.message));
  }
};

export const setAccessToken = accessToken =>
  createAction(USER_ACTION_TYPES.SET_ACCESS_TOKEN, accessToken);
