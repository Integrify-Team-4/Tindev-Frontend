import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { AppState, DeletingRequestActionType } from '../types'

import {
  registerEmployerSuccess,
  registerEmployerFail,
} from '../../redux/actions/employer'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/jobpost'

const credential = (state: AppState) => state.employer.credential
const jobPostFormData = (state: AppState) => state.employer.jobPost
function* registerEmployerSaga() {
  try {
    const credentialData = yield select(credential)
    const req = yield axios.post('/employer', {
      credential: credentialData,
    })
    yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/employer/jobs', job)
    console.log(res)
    yield put(registerJobPostSuccess())
  } catch (e) {
    yield put(registerJobPostFail(e))
  }
}
function* deletingJobPostSaga(action: DeletingRequestActionType) {
  try {
    const jobPostId = yield action.payload
    yield axios.delete(`/employer/jobs/${jobPostId}`)
    yield put(deleteJobPostSuccess())
  } catch (e) {
    yield put(deleteJobPostFail(e))
  }
}
const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
