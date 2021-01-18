import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'
import { LoginUserRequestAction, LogoutUserAction } from '../types'

import { loginUserSuccess, loginUserFail } from '../actions/user'

function* loginUserSaga(action: LoginUserRequestAction) {
  const email = action.payload.credential.email
  const password = action.payload.credential.password
  const history = action.payload.history

  try {
    const res = yield axios.post('/login/local', { email, password })

    if (res.data.status === 200) {
      yield put(loginUserSuccess(res.data.payload))
      yield LocalStorage.saveToken(res.data.payload.token)
      history.push('/user/profile')
    }
  } catch (error) {
    history.push('/')
    yield put(loginUserFail())
  }
}

function* logout(action: LogoutUserAction) {
  const history = action.payload
  yield history.push('/')
}

const sagaWatcher = [
  takeLatest('LOGIN_USER_REQUEST', loginUserSaga),
  takeLatest('LOGOUT_USER', logout),
]

export default sagaWatcher
