import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from '../types'

export const loginUserRequest = (email: string, password: string) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const loginUserSuccess = (userInfo: Credential) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userInfo,
  }
}

export const loginUserFail = () => {
  return {
    type: LOGIN_USER_FAIL,
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}
