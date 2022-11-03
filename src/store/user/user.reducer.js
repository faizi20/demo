import { USER_ACTION_TYPES } from './user.type';
import { axiosInstance } from '../../utils/api/api.util';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_UP_START:
    case USER_ACTION_TYPES.SIGN_IN_START:
    case USER_ACTION_TYPES.UPDATE_PROFILE_START:
    case USER_ACTION_TYPES.GET_USER_START: {
      return { ...state, error: null, isLoading: true };
    }

    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS:
    case USER_ACTION_TYPES.GET_USER_SUCCESS: {
      const _user = state.user;

      return {
        ...state,
        user: { ..._user, ...payload },
        error: null,
        isLoading: false,
      };
    }

    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
    case USER_ACTION_TYPES.SIGN_IN_FAILURE: {
      return { ...state, user: null, error: payload, isLoading: false };
    }

    case USER_ACTION_TYPES.UPDATE_PROFILE_FAILURE:
    case USER_ACTION_TYPES.GET_USER_FAILURE: {
      return { ...state, error: payload, isLoading: false };
    }

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return { ...state, user: null, error: null, isLoading: false };
    }

    case USER_ACTION_TYPES.SET_ACCESS_TOKEN: {
      const _user = state.user || {};
      axiosInstance.resetAPI(payload);
      return { ...state, user: { ..._user, accessToken: payload } };
    }

    default: {
      return state;
    }
  }
};
