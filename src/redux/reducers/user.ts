import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  UserActions,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  userInfo: {
    role: '',
    firstName: '',
    lastName: '',
    skills: [],
    skillLevel: '',
    relocate: '',
    startingDate: '',
    education: {
      institute: '',
      degree: '',
    },
  },
  loading: false,
  error: null,
  jobPost: {
    title: '',
    jobDescription: '',
    seniority: '',
    skills: [],
    companyName: '',
    companyInfo: '',
    address: '',
  },
}

const user = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        credential: action.payload,
        userInfo: action.payload,
      }
    case LOGIN_USER_SUCCESS:
      console.log('payload in redux', action.payload)
      return { ...state, loading: false, userInfo: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGOUT_USER:
      return {}
    default:
      return state
  }
}

export default user
