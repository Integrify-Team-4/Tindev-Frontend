import {
  Credential,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
  LOGIN_JOBSEEKER_REQUEST,
  LOGIN_JOBSEEKER_SUCCESS,
  LOGIN_JOBSEEKER_FAIL,
  LOGOUT_JOBSEEKER,
  UPDATE_JOBSEEKER_REQUEST,
  UPDATE_JOBSEEKER_SUCCESS,
  UPDATE_JOBSEEKER_FAIL,
} from '../types'

export const updateJobseekerRequest = (data: Credential) => {
  return {
    type: UPDATE_JOBSEEKER_REQUEST,
    payload: data,
  }
}

export const updateJobseekerSuccess = (data: Credential) => {
  return {
    type: UPDATE_JOBSEEKER_SUCCESS,
    payload: data,
  }
}

export const updateJobseekerFail = (error: string) => {
  return {
    type: UPDATE_JOBSEEKER_FAIL,
    payload: error,
  }
}

export const registerJobseekerRequest = (email: string, password: string) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const registerJobseekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: REGISTER_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const registerJobseekerFail = () => {
  return {
    type: REGISTER_JOBSEEKER_FAIL,
  }
}

export const loginJobseekerRequest = (email: string, password: string) => {
  return {
    type: LOGIN_JOBSEEKER_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export const loginJobseekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: LOGIN_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const loginJobseekerFail = () => {
  return {
    type: LOGIN_JOBSEEKER_FAIL,
  }
}

export const logoutJobseeker = () => {
  return {
    type: LOGOUT_JOBSEEKER,
  }
}
