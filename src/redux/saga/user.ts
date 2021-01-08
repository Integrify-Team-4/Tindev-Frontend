import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'
import { AppState } from '../types'

import { loginUserSuccess, loginUserFail } from '../actions/user'

const credential = (state: AppState) => state.user.credential

function* loginUserSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })
    console.log('res', res)

    yield put(loginUserSuccess(res.data.payload))
    yield LocalStorage.saveToken(res.data.payload.token)
  } catch (error) {
    yield put(loginUserFail())
  }
}

const sagaWatcher = [takeLatest('LOGIN_USER_REQUEST', loginUserSaga)]

export default sagaWatcher
