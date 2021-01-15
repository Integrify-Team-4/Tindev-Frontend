import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
  RegisterEmployerRequestAction,
  AppState,
  UpdateEmployerRequestAction,
} from './../types'
import {
  registerEmployerSuccess,
  registerEmployerFail,
  updateEmployerSuccess,
  updateEmployerFail,
  getEmployerSuccess,
  getEmployerFail,
} from '../../redux/actions/employer'

const credential = (state: AppState) => state.employer.credential

function* registerEmployerSaga(action: RegisterEmployerRequestAction) {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/employer', {
      credential: credentialData,
    })
    yield put(registerEmployerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* updateEmployerSaga(action: UpdateEmployerRequestAction) {
  const employerInfo = action.payload
  try {
    const res = yield axios.patch('/employer', employerInfo)
    yield put(updateEmployerSuccess(res.data.payload))
  } catch (error) {
    yield put(updateEmployerFail(error))
  }
}

function* getEmployerSaga() {
  try {
    const res = yield axios.get('/employer')
    yield put(getEmployerSuccess(res.data))
  } catch (error) {
    yield put(getEmployerFail(error))
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('UPDATE_EMPLOYER_REQUEST', updateEmployerSaga),
  takeLatest('GET_EMPLOYER_REQUEST', getEmployerSaga),
]

export default sagaWatcher
