import {
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
  GET_EMPLOYER_REQUEST,
  GET_EMPLOYER_SUCCESS,
  GET_EMPLOYER_FAIL,
  CredentialStateEmployer,
  EmployerUpdate,
} from '../types'

export const registerEmployerRequest = (
  email: string,
  password: string,
  history: any
) => {
  return {
    type: REGISTER_EMPLOYER_REQUEST,
    payload: {
      email,
      password,
      history: history,
    },
  }
}

export const registerEmployerSuccess = (
  employerInfo: CredentialStateEmployer
) => {
  return {
    type: REGISTER_EMPLOYER_SUCCESS,
    payload: employerInfo,
  }
}

export const registerEmployerFail = () => {
  return {
    type: REGISTER_EMPLOYER_FAIL,
  }
}

export const updateEmployerRequest = (employer: Partial<EmployerUpdate>) => {
  return {
    type: UPDATE_EMPLOYER_REQUEST,
    payload: employer,
  }
}

export const updateEmployerSuccess = (employer: EmployerUpdate) => {
  return {
    type: UPDATE_EMPLOYER_SUCCESS,
    payload: employer,
  }
}

export const updateEmployerFail = (error: string) => {
  return {
    type: UPDATE_EMPLOYER_FAIL,
    payload: error,
  }
}

export type GetEmployer = {
  payload: {
    companyName: string
    companyInfo: string
    address: string
    role: string
    jobPosts: any[]
  }
}

export const getEmployerRequest = () => {
  return {
    type: GET_EMPLOYER_REQUEST,
  }
}

export const getEmployerSuccess = (employerInfo: GetEmployer) => {
  console.log(employerInfo)
  return {
    type: GET_EMPLOYER_SUCCESS,
    payload: employerInfo,
  }
}

export const getEmployerFail = (error: string) => {
  return {
    type: GET_EMPLOYER_FAIL,
    payload: error,
  }
}
