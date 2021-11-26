import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  NOTIFICATION_FAIL,
  USER_SIGNUP_FAIL,
  NOTIFICATION_REQUEST,
  NOTIFICATION_SUCCESS,
  ADMIN_LOGOUT,
  USER_LOGOUT,
} from "../constants/userConstants";

export const UserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
